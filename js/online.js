// =============================================
//  ONLINE — Modo multijugador online (Firebase)
// =============================================

// ─── Registro de nombres usados ──────────────
const USED_NAMES_KEY = 'quienEsQuien_usedNames';

function getUsedNames() {
  try { return JSON.parse(localStorage.getItem(USED_NAMES_KEY) || '[]'); } catch { return []; }
}

function saveUsedName(name) {
  if (!name || name.length < 2) return;
  let names = getUsedNames();
  names = [name, ...names.filter(n => n !== name)].slice(0, 8);
  localStorage.setItem(USED_NAMES_KEY, JSON.stringify(names));
}

function renderUsedNames() {
  const datalist = document.getElementById('used-names-list');
  const chips    = document.getElementById('used-names-chips');
  if (!datalist || !chips) return;
  const names = getUsedNames();
  datalist.innerHTML = names.map(n => `<option value="${escapeHtml(n)}">`).join('');
  chips.innerHTML = names.map(n =>
    `<button type="button" class="name-chip" onclick="document.getElementById('online-player-name').value='${escapeHtml(n)}'">${escapeHtml(n)}</button>`
  ).join('');
}

// ─── Selección de modo ───────────────────────
function selectMode(mode) {
  gameMode = mode;
  if (mode === 'local') {
    document.getElementById('player-names-section').style.display = '';
    showScreen('screen-setup');
  } else {
    renderUsedNames();
    showScreen('screen-online-lobby');
  }
}

function goToModeSelect() {
  cancelOnlineListeners();
  gameMode = null;
  showScreen('screen-mode');
}

// ─── Crear sala ──────────────────────────────
async function createRoom() {
  const nameInput = document.getElementById('online-player-name').value.trim() || 'Jugador 1';
  const statusEl  = document.getElementById('online-status');

  if (!window.FB) {
    statusEl.textContent = '❌ Firebase no está configurado. Revisa firebase.js';
    statusEl.style.color = 'var(--red)';
    return;
  }

  const code = generateRoomCode();
  roomCode   = code;
  myRole     = 'p1';
  p1Name     = nameInput;

  saveUsedName(nameInput);

  statusEl.textContent = '⏳ Creando sala...';

  try {
    const { db, ref, set, onDisconnect, remove } = window.FB;
    const roomRef = ref(db, `rooms/${code}`);

    await set(roomRef, {
      p1Name: nameInput,
      p2Name: '',
      status: 'waiting',    // waiting | config | playing | finished
      currentPlayer: 1,
      gameChars: null,
      secretP1: null,
      secretP2: null,
      winner: null,
      createdAt: Date.now()
    });

    // Si p1 se desconecta mientras espera → borra la sala
    onDisconnect(roomRef).remove();

    showScreen('screen-waiting');
    document.getElementById('room-code-display').textContent = code;

    listenForP2Join(code);

  } catch (err) {
    statusEl.textContent = '❌ Error al crear sala: ' + err.message;
    statusEl.style.color = 'var(--red)';
  }
}

// ─── Unirse a sala ───────────────────────────
async function joinRoom() {
  const nameInput = document.getElementById('online-player-name').value.trim() || 'Jugador 2';
  const codeInput = document.getElementById('room-code-input').value.trim().toUpperCase();
  const statusEl  = document.getElementById('online-status');

  if (!window.FB) {
    statusEl.textContent = '❌ Firebase no está configurado. Revisa firebase.js';
    statusEl.style.color = 'var(--red)';
    return;
  }

  if (codeInput.length < 4) {
    statusEl.textContent = '⚠️ Introduce un código de sala válido';
    statusEl.style.color = 'var(--gold)';
    return;
  }

  statusEl.textContent = '⏳ Buscando sala...';

  try {
    const { db, ref, get, update } = window.FB;
    const roomRef  = ref(db, `rooms/${codeInput}`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) {
      statusEl.textContent = '❌ Sala no encontrada. Comprueba el código.';
      statusEl.style.color = 'var(--red)';
      return;
    }

    const room = snapshot.val();
    if (room.status !== 'waiting') {
      statusEl.textContent = '❌ La sala ya está en juego o ha terminado.';
      statusEl.style.color = 'var(--red)';
      return;
    }
    if (room.p2Name !== null && room.p2Name !== undefined && room.p2Name !== '') {
      statusEl.textContent = '❌ La sala ya está llena.';
      statusEl.style.color = 'var(--red)';
      return;
    }

    roomCode = codeInput;
    myRole   = 'p2';
    p2Name   = nameInput;
    p1Name   = room.p1Name;

    saveUsedName(nameInput);

    await update(roomRef, { p2Name: nameInput, status: 'config' });

    statusEl.textContent = '✅ Unido a la sala. Esperando configuración...';
    statusEl.style.color = 'var(--green)';

    listenForGameStart(codeInput);

  } catch (err) {
    statusEl.textContent = '❌ Error: ' + err.message;
    statusEl.style.color = 'var(--red)';
  }
}

// ─── Escuchar que p2 se une (p1 espera) ──────
function listenForP2Join(code) {
  const { db, ref, onValue, off } = window.FB;
  const roomRef = ref(db, `rooms/${code}`);

  const listener = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) return;
    const room = snapshot.val();

    if (room.p2Name && room.status === 'config') {
      p2Name = room.p2Name;
      off(roomRef, 'value', listener);
      showOnlineSetupForP1();
    }
    if (room.status === 'finished' || room.status === 'abandoned') {
      off(roomRef, 'value', listener);
    }
  });

  onlineListeners.push({ ref: roomRef, listener });
}

// ─── P1 muestra pantalla de configuración ────
function showOnlineSetupForP1() {
  document.getElementById('player-names-section').style.display = 'none';
  document.getElementById('setup-back-btn').style.display = 'none';
  showScreen('screen-setup');
  document.getElementById('loading-msg').textContent = `✅ ${p2Name} se unió. Configura la partida y pulsa ¡JUGAR!`;
  document.getElementById('loading-msg').style.color = 'var(--green)';
}

// ─── P2 escucha que el juego empiece ─────────
function listenForGameStart(code) {
  const { db, ref, onValue, off } = window.FB;
  const roomRef = ref(db, `rooms/${code}`);

  showScreen('screen-waiting');
  document.getElementById('room-code-display').textContent = code;
  document.getElementById('waiting-status').innerHTML =
    '<div class="spinner"></div><span>Esperando que el anfitrión configure la partida...</span>';

  const listener = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      off(roomRef, 'value', listener);
      openModal('modal-disconnected');
      return;
    }
    const room = snapshot.val();

    if (room.status === 'playing' && room.gameChars) {
      off(roomRef, 'value', listener);
      gameChars  = room.gameChars;
      secretP1   = room.secretP1;
      secretP2   = room.secretP2;
      p1Name     = room.p1Name;
      p2Name     = room.p2Name;
      mySecret   = secretP2;
      startOnlineGame(code);
    }

    if (room.status === 'abandoned') {
      off(roomRef, 'value', listener);
      openModal('modal-disconnected');
    }
  });

  onlineListeners.push({ ref: roomRef, listener });
}

// ─── Cancelar sala (p1) ───────────────────────
async function cancelRoom() {
  if (roomCode && window.FB) {
    const { db, ref, remove } = window.FB;
    try { await remove(ref(db, `rooms/${roomCode}`)); } catch {}
  }
  cancelOnlineListeners();
  roomCode = null;
  goToModeSelect();
}

// ─── P1 sube la configuración e inicia ───────
async function initOnlineGameAsP1() {
  const { db, ref, update } = window.FB;

  secretP1 = gameChars[Math.floor(Math.random() * gameChars.length)];
  do {
    secretP2 = gameChars[Math.floor(Math.random() * gameChars.length)];
  } while (secretP2.name === secretP1.name);
  mySecret = secretP1;

  await update(ref(db, `rooms/${roomCode}`), {
    status:        'playing',
    gameChars:     gameChars,
    secretP1:      secretP1,
    secretP2:      secretP2,
    currentPlayer: 1,
    flippedP1:     [],
    flippedP2:     []
  });

  startOnlineGame(roomCode);
}

// ─── Arrancar juego online (ambos jugadores) ─
function startOnlineGame(code) {
  if (gameStarted) return;
  gameStarted   = true;
  myFlipped     = new Set();
  currentPlayer = 1;

  document.getElementById('boards-local').style.display  = 'none';
  document.getElementById('boards-online').style.display = '';

  document.getElementById('badge-p1-name').textContent      = p1Name;
  document.getElementById('badge-p2-name').textContent      = p2Name;
  const myBoardLabel = myRole === 'p1' ? `Mi tablero (${p1Name})` : `Mi tablero (${p2Name})`;
  document.getElementById('board-label-online').textContent = myBoardLabel;

  buildOnlineBoard();
  buildDatalist();
  addSecretButton();

  showScreen('screen-game');
  listenOnlineGameState(code);
  listenChat(code);

  setTimeout(() => showSecretModalOnline(), 400);
}

// ─── Escuchar estado de la partida ────────────
function listenOnlineGameState(code) {
  const { db, ref, onValue, off } = window.FB;
  const stateRef = ref(db, `rooms/${code}`);
  let firstFire  = true;

  const listener = onValue(stateRef, (snapshot) => {
    if (!snapshot.exists()) {
      openModal('modal-disconnected');
      return;
    }
    const room = snapshot.val();

    const prevPlayer = currentPlayer;
    currentPlayer    = room.currentPlayer || 1;

    // El primer disparo de onValue es el estado inicial al registrarse el listener.
    // En ese momento el modal secreto puede estar abriéndose (setTimeout 400ms),
    // así que no tocamos la UI de turno para no interferir.
    if (firstFire) {
      firstFire = false;
    } else if (prevPlayer !== currentPlayer) {
      // Solo actualizar cuando el turno cambia realmente
      updateTurnUI();
      if (isMyTurn()) {
        hideWaitingTurnBanner();
      } else {
        showWaitingTurnModal();
      }
    }

    if (room.winner) {
      off(stateRef, 'value', listener);
      const winnerName = room.winner === 'p1' ? p1Name : p2Name;
      const secret     = room.winner === 'p1' ? room.secretP2 : room.secretP1;
      showWin(room.winner === myRole ? 'yo' : 'rival', winnerName, secret);
    }

    if (room.status === 'abandoned') {
      off(stateRef, 'value', listener);
      openModal('modal-disconnected');
    }
  });

  onlineListeners.push({ ref: stateRef, listener });
}

function isMyTurn() {
  return (myRole === 'p1' && currentPlayer === 1) ||
         (myRole === 'p2' && currentPlayer === 2);
}

function showWaitingTurnModal() {
  const rival    = myRole === 'p1' ? p2Name : p1Name;
  const msg      = document.getElementById('waiting-turn-msg');
  const banner   = document.getElementById('waiting-turn-inline');
  const guessBtn = document.getElementById('guess-btn');
  const endTurnBtn = document.getElementById('end-turn-btn');
  const guessInput = document.getElementById('guess-input');
  if (msg)      msg.textContent = `Turno de ${rival}... espera.`;
  if (banner)   banner.style.display = 'flex';
  if (guessBtn) guessBtn.disabled = true;
  if (endTurnBtn) endTurnBtn.disabled = true;
  if (guessInput) { guessInput.disabled = true; guessInput.style.opacity = '0.4'; }
}

function hideWaitingTurnBanner() {
  const banner     = document.getElementById('waiting-turn-inline');
  const guessBtn   = document.getElementById('guess-btn');
  const endTurnBtn = document.getElementById('end-turn-btn');
  const guessInput = document.getElementById('guess-input');
  if (banner)     banner.style.display = 'none';
  if (guessBtn)   guessBtn.disabled = false;
  if (endTurnBtn) endTurnBtn.disabled = false;
  if (guessInput) { guessInput.disabled = false; guessInput.style.opacity = '1'; }
}

// ─── Chat ─────────────────────────────────────
function listenChat(code) {
  const { db, ref, onValue } = window.FB;
  const chatRef = ref(db, `rooms/${code}/chat`);

  const listener = onValue(chatRef, (snapshot) => {
    if (!snapshot.exists()) return;
    const msgs   = snapshot.val();
    const chatEl = document.getElementById('chat-messages');
    chatEl.innerHTML = '';
    Object.values(msgs).sort((a, b) => a.ts - b.ts).forEach(m => {
      const div  = document.createElement('div');
      const isMe = (m.role === myRole);
      div.className = 'chat-msg ' + (isMe ? 'mine' : 'theirs');
      div.innerHTML = `<span class="chat-sender">${m.name}</span><span class="chat-text">${escapeHtml(m.text)}</span>`;
      chatEl.appendChild(div);
    });
    chatEl.scrollTop = chatEl.scrollHeight;
  });

  onlineListeners.push({ ref: chatRef, listener });
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const text  = input.value.trim();
  if (!text || !roomCode || !window.FB) return;

  const { db, ref, push } = window.FB;
  const myName = myRole === 'p1' ? p1Name : p2Name;

  await push(ref(db, `rooms/${roomCode}/chat`), {
    role: myRole,
    name: myName,
    text: text,
    ts:   Date.now()
  });

  input.value = '';
}

// ─── Victoria online ──────────────────────────
async function handleOnlineWin() {
  const { db, ref, update } = window.FB;
  await update(ref(db, `rooms/${roomCode}`), {
    winner: myRole,
    status: 'finished'
  });
}

// ─── Fin de turno online ──────────────────────
async function endTurnOnline() {
  const { db, ref, update } = window.FB;
  const next = currentPlayer === 1 ? 2 : 1;
  await update(ref(db, `rooms/${roomCode}`), { currentPlayer: next });
  showWaitingTurnModal();
}
