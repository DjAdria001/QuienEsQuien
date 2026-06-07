// =============================================
//  JUEGO — Lógica principal de la partida
// =============================================

// ─── Inicio de partida ────────────────────────
async function startGame() {
  const btn = document.getElementById('start-btn');
  const msg = document.getElementById('loading-msg');

  if (gameMode === 'local') {
    p1Name = document.getElementById('p1-name').value.trim() || 'Jugador 1';
    p2Name = document.getElementById('p2-name').value.trim() || 'Jugador 2';
  }

  if (selectedTab === 'csm') {
    if (selectedCsmChars.size < 9) {
      msg.textContent = '⚠️ Selecciona al menos 9 personajes';
      msg.style.color = 'var(--red)';
      return;
    }
    gameChars = CSM_CHARACTERS.filter(c => selectedCsmChars.has(c.name));
    shuffle(gameChars);

  } else if (selectedTab === 'jjk') {
    if (selectedJjkChars.size < 9) {
      msg.textContent = '⚠️ Selecciona al menos 9 personajes';
      msg.style.color = 'var(--red)';
      return;
    }
    gameChars = JJK_CHARACTERS.filter(c => selectedJjkChars.has(c.name));
    shuffle(gameChars);

  } else {
    // Pokémon
    btn.disabled = true;
    const gen   = parseInt(document.getElementById('poke-gen').value);
    const type  = document.getElementById('poke-type').value;
    const count = parseInt(document.getElementById('poke-count').value);
    const range = GEN_RANGES[gen];

    msg.textContent = '⏳ Cargando Pokémon desde la PokéAPI...';
    msg.style.color = 'var(--gold)';
    try {
      const chars = type
        ? await fetchPokemonByType(type, range, count)
        : await fetchPokemonRandom(range, count);

      if (chars.length < 9) {
        msg.textContent = '⚠️ No hay suficientes Pokémon con ese filtro.';
        msg.style.color = 'var(--red)';
        btn.disabled = false;
        return;
      }
      gameChars       = chars.slice(0, count);
      msg.textContent = '';
    } catch {
      msg.textContent = '❌ Error al cargar Pokémon. Comprueba tu conexión.';
      msg.style.color = 'var(--red)';
      btn.disabled = false;
      return;
    }
  }

  btn.disabled = false;

  if (gameMode === 'local') {
    initLocalGame();
  } else {
    await initOnlineGameAsP1();
  }
}

// ─── Init — Partida local ─────────────────────
function initLocalGame() {
  flippedP1     = new Set();
  flippedP2     = new Set();
  currentPlayer = 1;
  secretP1      = gameChars[Math.floor(Math.random() * gameChars.length)];
  secretP2      = gameChars[Math.floor(Math.random() * gameChars.length)];

  document.getElementById('boards-local').style.display  = '';
  document.getElementById('boards-online').style.display = 'none';

  document.getElementById('badge-p1-name').textContent  = p1Name;
  document.getElementById('badge-p2-name').textContent  = p2Name;
  document.getElementById('board-label-p1').textContent = `Tablero de ${p1Name}`;
  document.getElementById('board-label-p2').textContent = `Tablero de ${p2Name}`;

  buildBoard('board-p1', 1);
  buildBoard('board-p2', 2);
  buildDatalist();
  addSecretButton();
  updateTurnUI();

  showScreen('screen-game');
  setTimeout(() => showSecretModalLocal(), 400);
}

// ─── Turno ────────────────────────────────────
function updateTurnUI() {
  const currentName = currentPlayer === 1 ? p1Name : p2Name;
  const rivalName   = currentPlayer === 1 ? p2Name : p1Name;
  document.getElementById('turn-player-name').textContent = currentName;
  document.getElementById('badge-p1').classList.toggle('active', currentPlayer === 1);
  document.getElementById('badge-p2').classList.toggle('active', currentPlayer === 2);
  document.getElementById('guess-input').value       = '';
  document.getElementById('guess-input').placeholder = `¿Cuál es el personaje de ${rivalName}?`;

  if (gameMode === 'online') {
    if (isMyTurn()) {
      hideWaitingTurnBanner();
    } else {
      showWaitingTurnModal();
    }
  }
}

function endTurn() {
  if (gameMode === 'online') {
    if (!isMyTurn()) return;
    endTurnOnline();
  } else {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateTurnUI();
  }
}

// ─── Adivinar ─────────────────────────────────
function makeGuess() {
  if (gameMode === 'online' && !isMyTurn()) return;

  const input = document.getElementById('guess-input').value.trim();
  if (!input) return;

  const secret  = currentPlayer === 1 ? secretP2 : secretP1;
  const correct = input.toLowerCase() === secret.name.toLowerCase();

  if (correct) {
    if (gameMode === 'online') {
      handleOnlineWin();
    } else {
      const winnerNum = currentPlayer;
      showWin(null, winnerNum === 1 ? p1Name : p2Name, secret);
    }
  } else {
    document.getElementById('gr-title').textContent = '❌ Incorrecto';
    document.getElementById('gr-title').style.color = 'var(--red)';
    document.getElementById('gr-msg').textContent   = `"${input}" no es el personaje secreto. ¡Turno al otro jugador!`;
    document.getElementById('gr-ok').onclick = () => {
      closeModal('modal-guess-result');
      endTurn();
    };
    openModal('modal-guess-result');
  }
}

// ─── Modal personaje secreto — Local ─────────
function showSecretModalLocal() {
  const secret = currentPlayer === 1 ? secretP1 : secretP2;
  const name   = currentPlayer === 1 ? p1Name   : p2Name;

  document.getElementById('modal-secret-player').textContent = `${name}: ¡este es TU personaje secreto! No lo enseñes.`;
  document.getElementById('modal-secret-img').src            = secret.img;
  document.getElementById('modal-secret-name').textContent   = secret.name;

  openModal('modal-secret');

  document.getElementById('modal-secret-ok').onclick = () => {
    closeModal('modal-secret');
    if (currentPlayer === 1) {
      currentPlayer = 2;
      updateTurnUI();
      setTimeout(() => showSecretModalLocal(), 300);
    } else {
      currentPlayer = 1;
      updateTurnUI();
    }
  };
}

// ─── Modal personaje secreto — Online ────────
function showSecretModalOnline() {
  const secret = mySecret;
  const name   = myRole === 'p1' ? p1Name : p2Name;

  document.getElementById('modal-secret-player').textContent = `${name}: ¡este es TU personaje secreto!`;
  document.getElementById('modal-secret-img').src            = secret.img;
  document.getElementById('modal-secret-name').textContent   = secret.name;

  openModal('modal-secret');

  document.getElementById('modal-secret-ok').onclick = () => {
    closeModal('modal-secret');
    updateTurnUI();
  };
}

function peekSecret() {
  const secret = gameMode === 'online'
    ? mySecret
    : (currentPlayer === 1 ? secretP1 : secretP2);

  document.getElementById('modal-secret-player').textContent = 'Tu personaje secreto:';
  document.getElementById('modal-secret-img').src            = secret.img;
  document.getElementById('modal-secret-name').textContent   = secret.name;
  document.getElementById('modal-secret-ok').onclick         = () => closeModal('modal-secret');
  openModal('modal-secret');
}

function addSecretButton() {
  if (document.getElementById('secret-btn-real')) return;
  const btn = document.createElement('button');
  btn.className   = 'secret-btn';
  btn.id          = 'secret-btn-real';
  btn.textContent = '👁 Mi personaje';
  btn.addEventListener('click', peekSecret);
  const header = document.querySelector('.game-header');
  header.insertBefore(btn, header.lastElementChild);
}

// ─── Victoria ─────────────────────────────────
function showWin(who, winnerName, secret) {
  hideWaitingTurnBanner();
  document.getElementById('win-title').textContent       = `¡${winnerName} GANA!`;
  document.getElementById('win-subtitle').textContent    = 'Adivinó el personaje secreto del rival';
  document.getElementById('win-secret-img').src          = secret.img;
  document.getElementById('win-secret-name').textContent = secret.name;
  showScreen('screen-win');
  cancelOnlineListeners();
}

// ─── Salir / Volver a jugar ───────────────────
function confirmQuit() {
  openModal('modal-quit');
}

async function quitGame() {
  closeModal('modal-quit');
  cancelOnlineListeners();
  if (gameMode === 'online' && roomCode && window.FB) {
    const { db, ref, update } = window.FB;
    try { await update(ref(db, `rooms/${roomCode}`), { status: 'abandoned' }); } catch {}
  }
  goHome();
}

function goHome() {
  closeModal('modal-quit');
  closeModal('modal-disconnected');
  cancelOnlineListeners();
  roomCode      = null;
  myRole        = null;
  mySecret      = null;
  gameMode      = null;
  currentPlayer = 1;
  flippedP1     = new Set();
  flippedP2     = new Set();
  myFlipped     = new Set();

  document.getElementById('setup-back-btn').style.display      = '';
  document.getElementById('player-names-section').style.display = '';
  document.getElementById('start-btn').disabled                = false;
  document.getElementById('loading-msg').textContent           = '';
  document.getElementById('loading-msg').style.color           = '';
  document.getElementById('room-code-input').value             = '';
  document.getElementById('online-status').textContent         = '';

  const secretBtn = document.getElementById('secret-btn-real');
  if (secretBtn) secretBtn.remove();

  showScreen('screen-mode');
}

function playAgain() {
  cancelOnlineListeners();
  roomCode  = null;
  myRole    = null;
  mySecret  = null;
  const secretBtn = document.getElementById('secret-btn-real');
  if (secretBtn) secretBtn.remove();
  document.getElementById('start-btn').disabled      = false;
  document.getElementById('loading-msg').textContent = '';
  if (gameMode === 'local') {
    document.getElementById('player-names-section').style.display = '';
    document.getElementById('setup-back-btn').style.display = '';
    showScreen('screen-setup');
  } else {
    goHome();
  }
}

// ─── Init al cargar la página ─────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildCsmList();
  buildJjkList();
  generateQuestionMarks();
});
