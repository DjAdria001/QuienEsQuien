// =============================================
//  DATOS — Personajes de Chainsaw Man
// =============================================
const CSM_CHARACTERS = [
  { name: "Denji",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lGfyBkiEflBkIlYF5DDyj3uxYKTDk-mLNw&s" },
  { name: "Makima",        img: "https://sm.ign.com/ign_latam/screenshot/default/makima_h914.jpg" },
  { name: "Power",         img: "https://preview.redd.it/powers-abilities-v0-7rnkfp57r31e1.jpeg?width=640&crop=smart&auto=webp&s=0eb78a54d53f6e687e8084203e0330e621646065" },
  { name: "Aki",           img: "https://a.storyblok.com/f/178900/1504x846/31be3cacf7/b5c916e5cf3e6eb715edd2370d5f013e1667532273_main.jpg/m/filters:quality(95)format(webp)" },
  { name: "Himeno",        img: "https://comicbook.com/wp-content/uploads/sites/4/2022/11/f57d890c-c14b-42e1-adff-ecaf80988c3c.jpg?w=1200" },
  { name: "Kishibe",       img: "https://static.wikia.nocookie.net/chainsaw-man/images/3/33/Kishibe_passes_Denji_and_Power_with_perfect_score.png/revision/latest?cb=20221213185653" },
  { name: "Kobeni",        img: "https://i.redd.it/why-kobeni-works-and-fami-doesnt-v0-9ryu0ab0s1vg1.jpg?width=1140&format=pjpg&auto=webp&s=5491ac720288ab8624f7a2971b2c76e16dd3b707" },
  { name: "Reze",          img: "https://media.vandalsports.com/i/640x360/9-2025/2025922164933_1.jpg" },
  { name: "Quanxi",        img: "https://static.wikia.nocookie.net/chainsaw-man/images/9/94/Quanxi2.png/revision/latest?cb=20230921122029&path-prefix=es" },
  { name: "Beam",          img: "https://i.pinimg.com/736x/7a/ea/be/7aeabe6e66dab5bdca27935012a21968.jpg" },
  { name: "Galgali",       img: "https://manga-imperial.fr/cdn/shop/articles/galgali_600x.jpg?v=1682070046" },
  { name: "Katana-Man",    img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/11/katana-man-chainsaw-man.jpg" },
  { name: "Angel Devil",   img: "https://static.wikia.nocookie.net/chainsaw-man/images/d/d3/Angel_anime.png/revision/latest?cb=20230120161110&path-prefix=es" },
  { name: "Cosmo",         img: "https://i.pinimg.com/236x/4d/a6/dc/4da6dc4cf34acf66dc214e1f2315f946.jpg" },
  { name: "Pochita",       img: "https://preview.redd.it/pochita-drawing-update-v0-n4zj757fc5sc1.jpg?width=640&crop=smart&auto=webp&s=d3a9aa5782b1e13a8dc9aebd1d7623eba2f6079e" },
  { name: "Nayuta",        img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/07/nayuta-csm-cover.jpg?w=1200&h=900&fit=crop" },
  { name: "Future Devil",  img: "https://static.wikia.nocookie.net/chainsaw-man/images/0/02/Future_Devil_anime.png/revision/latest?cb=20221220183132" },
  { name: "Asa Mitaka",    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjfz4VGOn7vIeJBMHrFqCKIT1fcLDD5CoJtw&s" },
  { name: "Yoru",          img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/09/war-devil-asa-mitaka-and-falling-devil.jpg?w=1200&h=675&fit=crop" },
  { name: "Morti",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNLJP3_J64sTBM8gST7FyxOkkcFdBAA8tzA&s" },
  { name: "Falling Devil", img: "https://dthezntil550i.cloudfront.net/st/latest/st2306041035108110024105396/1280_960/ae46c2ba-893f-4c02-8752-836d0084c278.png" },
  { name: "Fox Devil",     img: "https://static.wikia.nocookie.net/vsbattles/images/a/a2/FoxDevilAnime.png/revision/latest?cb=20250417042103" },
  { name: "Fami",          img: "https://static.wikia.nocookie.net/chainsaw-man/images/c/c1/Volume_21_%28Textless%29.png/revision/latest/scale-to-width-down/1200?cb=20250626083013" },
  { name: "Barem",         img: "https://static.wikia.nocookie.net/villains/images/d/df/BaremHybrid.jpg/revision/latest?cb=20230924203221" },
  { name: "Fumiko",        img: "https://static.wikia.nocookie.net/chainsaw-man/images/6/60/Fumiko_Mifune_Infobox.png/revision/latest/scale-to-width-down/250?cb=20240902225827" },
];

const JJK_CHARACTERS = [
  { name: "Yuji Itadori",      img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/7/7f/Yuji_Itadori_anime.png/revision/latest?cb=20201001190250" },
  { name: "Megumi Fushiguro",  img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/3e/Megumi_Fushiguro_anime.png/revision/latest?cb=20201001190312" },
  { name: "Nobara Kugisaki",   img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/0/0d/Nobara_Kugisaki_anime.png/revision/latest?cb=20201001190330" },
  { name: "Satoru Gojo",       img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/3b/Satoru_Gojo_anime.png/revision/latest?cb=20201001190402" },
  { name: "Suguru Geto",      img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/4/4a/Suguru_Geto_anime.png/revision/latest?cb=20201001190425" },
  { name: "Ryomen Sukuna",     img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/9/9d/Sukuna_anime.png/revision/latest?cb=20201001190448" },
  { name: "Toge Inumaki",      img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/7/7b/Toge_Inumaki_anime.png/revision/latest?cb=20201001190510" },
  { name: "Panda",             img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/2/2f/Panda_anime.png/revision/latest?cb=20201001190532" },
  { name: "Maki Zenin",        img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/5e/Maki_Zenin_anime.png/revision/latest?cb=20201001190555" },
  { name: "Toji Fushiguro",    img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/6/6b/Toji_Fushiguro_anime.png/revision/latest?cb=20210716084821" },
  { name: "Kento Nanami",      img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/8/8e/Kento_Nanami_anime.png/revision/latest?cb=20201001190620" },
  { name: "Mahito",            img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/2/2d/Mahito_anime.png/revision/latest?cb=20201001190642" },
  { name: "Jogo",              img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/6/6e/Jogo_anime.png/revision/latest?cb=20201001190705" },
  { name: "Hanami",            img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/8/8f/Hanami_anime.png/revision/latest?cb=20201001190728" },
  { name: "Choso",             img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/1/1a/Choso_anime.png/revision/latest?cb=20210806090512" },
  { name: "Yuta Okkotsu",      img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/3a/Yuta_Okkotsu_anime.png/revision/latest?cb=20211224093702" },
  { name: "Rika Orimoto",      img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/5c/Rika_Orimoto.png/revision/latest?cb=20211224093745" },
  { name: "Aoi Todo",          img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/4/4f/Aoi_Todo_anime.png/revision/latest?cb=20201001190810" },
  { name: "Mai Zenin",         img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/0/0a/Mai_Zenin_anime.png/revision/latest?cb=20201001190835" },
  { name: "Naoya Zenin",       img: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/3f/Naoya_Zenin.png/revision/latest?cb=20210727123456" }
];

const GEN_RANGES = {
  0:[1,1025],1:[1,151],2:[152,251],3:[252,386],4:[387,493],
  5:[494,649],6:[650,721],7:[722,809],8:[810,905],9:[906,1025],
};

// =============================================
//  ESTADO GLOBAL
// =============================================
let gameMode         = null;  // 'local' | 'online'
let selectedTab      = 'csm';
let selectedCsmChars = new Set(CSM_CHARACTERS.map(c => c.name));
let gameChars        = [];
let secretP1         = null;
let secretP2         = null;
let currentPlayer    = 1;
let p1Name           = 'Jugador 1';
let p2Name           = 'Jugador 2';
let flippedP1        = new Set();
let flippedP2        = new Set();

// ─── Estado online ───
let roomCode         = null;
let myRole           = null;   // 'p1' | 'p2'
let mySecret         = null;
let myFlipped        = new Set();
let onlineListeners  = [];     // para limpiar listeners al salir

// =============================================
//  MODO DE JUEGO — Selección inicial
// =============================================
function selectMode(mode) {
  gameMode = mode;
  if (mode === 'local') {
    document.getElementById('player-names-section').style.display = '';
    showScreen('screen-setup');
  } else {
    showScreen('screen-online-lobby');
  }
}

function goToModeSelect() {
  cancelOnlineListeners();
  showScreen('screen-mode');
}

// =============================================
//  ONLINE — Crear sala
// =============================================
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

    // Escuchar cuando p2 se une
    listenForP2Join(code);

  } catch (err) {
    statusEl.textContent = '❌ Error al crear sala: ' + err.message;
    statusEl.style.color = 'var(--red)';
  }
}

// =============================================
//  ONLINE — Unirse a sala
// =============================================
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

    await update(roomRef, { p2Name: nameInput, status: 'config' });

    statusEl.textContent = '✅ Unido a la sala. Esperando configuración...';
    statusEl.style.color = 'var(--green)';

    // P2 espera a que p1 configure el juego
    listenForGameStart(codeInput);

  } catch (err) {
    statusEl.textContent = '❌ Error: ' + err.message;
    statusEl.style.color = 'var(--red)';
  }
}

// =============================================
//  ONLINE — Escuchar que p2 se une (p1 espera)
// =============================================
function listenForP2Join(code) {
  const { db, ref, onValue, off } = window.FB;
  const roomRef = ref(db, `rooms/${code}`);

  const listener = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) return;
    const room = snapshot.val();

    if (room.p2Name && room.status === 'config') {
      p2Name = room.p2Name;
      off(roomRef, listener);
      // P1 ahora configura el juego
      showOnlineSetupForP1();
    }
    if (room.status === 'finished' || room.status === 'abandoned') {
      off(roomRef, listener);
    }
  });

  onlineListeners.push({ ref: roomRef, listener });
}

// =============================================
//  ONLINE — P1 muestra pantalla de config
// =============================================
function showOnlineSetupForP1() {
  document.getElementById('player-names-section').style.display = 'none';
  document.getElementById('setup-back-btn').style.display = 'none';
  showScreen('screen-setup');
  document.getElementById('loading-msg').textContent = `✅ ${p2Name} se unió. Configura la partida y pulsa ¡JUGAR!`;
  document.getElementById('loading-msg').style.color = 'var(--green)';
}

// =============================================
//  ONLINE — P2 escucha que el juego empiece
// =============================================
function listenForGameStart(code) {
  const { db, ref, onValue, off } = window.FB;
  const roomRef = ref(db, `rooms/${code}`);

  // Mostrar pantalla de espera para p2
  showScreen('screen-waiting');
  document.getElementById('room-code-display').textContent = code;
  document.getElementById('waiting-status').innerHTML =
    '<div class="spinner"></div><span>Esperando que el anfitrión configure la partida...</span>';

  const listener = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      off(roomRef, listener);
      openModal('modal-disconnected');
      return;
    }
    const room = snapshot.val();

    if (room.status === 'playing' && room.gameChars) {
      off(roomRef, listener);
      // P2 recibe los personajes y empieza
      gameChars  = room.gameChars;
      secretP1   = room.secretP1;
      secretP2   = room.secretP2;
      p1Name     = room.p1Name;
      p2Name     = room.p2Name;
      mySecret   = secretP2;
      startOnlineGame(code);
    }

    if (room.status === 'abandoned') {
      off(roomRef, listener);
      openModal('modal-disconnected');
    }
  });

  onlineListeners.push({ ref: roomRef, listener });
}

// =============================================
//  ONLINE — Cancelar sala (p1)
// =============================================
async function cancelRoom() {
  if (roomCode && window.FB) {
    const { db, ref, remove } = window.FB;
    try { await remove(ref(db, `rooms/${roomCode}`)); } catch {}
  }
  cancelOnlineListeners();
  roomCode = null;
  goToModeSelect();
}

// =============================================
//  SETUP — Cambio de pestaña
// =============================================
function switchTab(tab) {
  selectedTab = tab;
  document.getElementById('tab-csm').classList.toggle('active', tab === 'csm');
  document.getElementById('tab-poke').classList.toggle('active', tab === 'pokemon');
  document.getElementById('panel-csm').classList.toggle('active', tab === 'csm');
  document.getElementById('panel-pokemon').classList.toggle('active', tab === 'pokemon');
}

// =============================================
//  SETUP — Lista de personajes CSM
// =============================================
function buildCsmList() {
  const el = document.getElementById('csm-char-list');
  el.innerHTML = '';
  CSM_CHARACTERS.forEach(c => {
    const btn = document.createElement('button');
    btn.className   = 'char-toggle selected';
    btn.textContent = c.name;
    btn.dataset.name = c.name;
    btn.addEventListener('click', () => {
      if (selectedCsmChars.has(c.name)) {
        selectedCsmChars.delete(c.name);
        btn.classList.remove('selected');
      } else {
        selectedCsmChars.add(c.name);
        btn.classList.add('selected');
      }
    });
    el.appendChild(btn);
  });
}

// =============================================
//  POKEAPI
// =============================================
async function fetchPokemonByType(type, range, count) {
  const r    = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await r.json();
  let ids = data.pokemon
    .map(p => parseInt(p.pokemon.url.split('/').filter(Boolean).pop()))
    .filter(id => id >= range[0] && id <= range[1]);
  shuffle(ids);
  ids = ids.slice(0, count * 4);
  const results = [];
  for (const id of ids) {
    if (results.length >= count) break;
    const p = await fetchSinglePokemon(id);
    if (p) results.push(p);
  }
  return results;
}

async function fetchPokemonRandom(range, count) {
  const allIds = [];
  for (let i = range[0]; i <= range[1]; i++) allIds.push(i);
  shuffle(allIds);
  const ids     = allIds.slice(0, count * 3);
  const results = [];
  for (const id of ids) {
    if (results.length >= count) break;
    const p = await fetchSinglePokemon(id);
    if (p) results.push(p);
  }
  return results;
}

async function fetchSinglePokemon(id) {
  try {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!r.ok) return null;
    const d   = await r.json();
    const img = d.sprites.other['official-artwork']?.front_default || d.sprites.front_default;
    if (!img) return null;
    return { name: capitalize(d.name), img };
  } catch { return null; }
}

// =============================================
//  UTILS
// =============================================
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function cancelOnlineListeners() {
  if (!window.FB) return;
  const { off } = window.FB;
  onlineListeners.forEach(({ ref: r, listener }) => {
    try { off(r, listener); } catch {}
  });
  onlineListeners = [];
}

// =============================================
//  INICIO DE PARTIDA — Local
// =============================================
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
  } else {
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
    // P1 online: subir config a Firebase y empezar
    await initOnlineGameAsP1();
  }
}

// =============================================
//  INIT — Partida local
// =============================================
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

// =============================================
//  INIT — Partida online (P1 sube config)
// =============================================
async function initOnlineGameAsP1() {
  const { db, ref, update } = window.FB;

  secretP1 = gameChars[Math.floor(Math.random() * gameChars.length)];
  secretP2 = gameChars[Math.floor(Math.random() * gameChars.length)];
  mySecret = secretP1;

  // Subir estado del juego a Firebase
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

// =============================================
//  ONLINE — Arrancar juego (ambos jugadores)
// =============================================
function startOnlineGame(code) {
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

// =============================================
//  ONLINE — Escuchar estado de la partida
// =============================================
function listenOnlineGameState(code) {
  const { db, ref, onValue, off } = window.FB;
  const stateRef = ref(db, `rooms/${code}`);

  const listener = onValue(stateRef, (snapshot) => {
    if (!snapshot.exists()) {
      openModal('modal-disconnected');
      return;
    }
    const room = snapshot.val();

    // Actualizar turno
    const prevPlayer  = currentPlayer;
    currentPlayer     = room.currentPlayer || 1;

    if (prevPlayer !== currentPlayer) {
      updateTurnUI();
      // Si ahora es mi turno, cerrar modal de espera
      if (isMyTurn()) {
        closeModal('modal-waiting-turn');
      } else {
        showWaitingTurnModal();
      }
    }

    // Sincronizar cartas bajadas del rival (para mostrar las mías)
    // (Cada jugador solo ve su propio tablero, el estado del rival no se renderiza)

    // Comprobar victoria
    if (room.winner) {
      off(stateRef, listener);
      const winnerName = room.winner === 'p1' ? p1Name : p2Name;
      const secret     = room.winner === 'p1' ? room.secretP2 : room.secretP1;
      showWin(room.winner === myRole ? 'yo' : 'rival', winnerName, secret);
    }

    if (room.status === 'abandoned') {
      off(stateRef, listener);
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
  const rival = myRole === 'p1' ? p2Name : p1Name;
  document.getElementById('waiting-turn-msg').textContent = `Turno de ${rival}... Espera tu turno.`;
  openModal('modal-waiting-turn');
}

// =============================================
//  CHAT — Online
// =============================================
function listenChat(code) {
  const { db, ref, onValue } = window.FB;
  const chatRef = ref(db, `rooms/${code}/chat`);

  const listener = onValue(chatRef, (snapshot) => {
    if (!snapshot.exists()) return;
    const msgs  = snapshot.val();
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

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// =============================================
//  TABLERO — Construcción
// =============================================
function buildBoard(boardId, playerNum) {
  const el = document.getElementById(boardId);
  el.innerHTML = '';
  gameChars.forEach(c => {
    el.appendChild(createCard(c, playerNum, 'local'));
  });
}

function buildOnlineBoard() {
  const el = document.getElementById('board-online');
  el.innerHTML = '';
  const myPlayerNum = myRole === 'p1' ? 1 : 2;
  gameChars.forEach(c => {
    el.appendChild(createCard(c, myPlayerNum, 'online'));
  });
}

function createCard(c, playerNum, mode) {
  const card       = document.createElement('div');
  card.className   = 'char-card';
  card.dataset.name   = c.name;
  card.dataset.player = playerNum;
  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${c.img}" alt="${c.name}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="fallback-icon" style="display:none;">?</div>
    </div>
    <div class="card-name">${c.name}</div>
    <div class="flipped-x"></div>
  `;
  card.addEventListener('click', () => {
    if (mode === 'online') toggleCardOnline(card);
    else toggleCard(card, playerNum);
  });
  return card;
}

function buildDatalist() {
  const dl = document.getElementById('chars-datalist');
  dl.innerHTML = '';
  gameChars.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.name;
    dl.appendChild(opt);
  });
}

// =============================================
//  TOGGLE CARTAS — Local
// =============================================
function toggleCard(card, playerNum) {
  if (playerNum !== currentPlayer) return;
  const name    = card.dataset.name;
  const flipped = playerNum === 1 ? flippedP1 : flippedP2;
  if (flipped.has(name)) {
    flipped.delete(name);
    card.classList.remove('flipped');
  } else {
    flipped.add(name);
    card.classList.add('flipped');
  }
}

// =============================================
//  TOGGLE CARTAS — Online
// =============================================
function toggleCardOnline(card) {
  if (!isMyTurn()) return;
  const name = card.dataset.name;
  if (myFlipped.has(name)) {
    myFlipped.delete(name);
    card.classList.remove('flipped');
  } else {
    myFlipped.add(name);
    card.classList.add('flipped');
  }
}

// =============================================
//  TURNO
// =============================================
function updateTurnUI() {
  const currentName = currentPlayer === 1 ? p1Name : p2Name;
  const rivalName   = currentPlayer === 1 ? p2Name : p1Name;
  document.getElementById('turn-player-name').textContent = currentName;
  document.getElementById('badge-p1').classList.toggle('active', currentPlayer === 1);
  document.getElementById('badge-p2').classList.toggle('active', currentPlayer === 2);
  document.getElementById('guess-input').value       = '';
  document.getElementById('guess-input').placeholder = `¿Cuál es el personaje de ${rivalName}?`;

  if (gameMode === 'online') {
    const canPlay = isMyTurn();
    document.getElementById('guess-input').disabled   = !canPlay;
    document.getElementById('guess-input').style.opacity = canPlay ? '1' : '0.5';
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

async function endTurnOnline() {
  const { db, ref, update } = window.FB;
  const next = currentPlayer === 1 ? 2 : 1;
  await update(ref(db, `rooms/${roomCode}`), { currentPlayer: next });
  showWaitingTurnModal();
}

// =============================================
//  ADIVINAR
// =============================================
function makeGuess() {
  if (gameMode === 'online' && !isMyTurn()) return;

  const input  = document.getElementById('guess-input').value.trim();
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

async function handleOnlineWin() {
  const { db, ref, update } = window.FB;
  await update(ref(db, `rooms/${roomCode}`), {
    winner: myRole,
    status: 'finished'
  });
}

// =============================================
//  MODAL PERSONAJE SECRETO — Local
// =============================================
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

// =============================================
//  MODAL PERSONAJE SECRETO — Online
// =============================================
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
    if (!isMyTurn()) showWaitingTurnModal();
  };
}

function peekSecret() {
  const secret = gameMode === 'online'
    ? mySecret
    : (currentPlayer === 1 ? secretP1 : secretP2);

  document.getElementById('modal-secret-player').textContent = 'Tu personaje secreto:';
  document.getElementById('modal-secret-img').src            = secret.img;
  document.getElementById('modal-secret-name').textContent   = secret.name;
  document.getElementById('modal-secret-ok').onclick        = () => closeModal('modal-secret');
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

// =============================================
//  VICTORIA
// =============================================
function showWin(who, winnerName, secret) {
  closeModal('modal-waiting-turn');
  document.getElementById('win-title').textContent       = `¡${winnerName} GANA!`;
  document.getElementById('win-subtitle').textContent    = 'Adivinó el personaje secreto del rival';
  document.getElementById('win-secret-img').src          = secret.img;
  document.getElementById('win-secret-name').textContent = secret.name;
  showScreen('screen-win');
  cancelOnlineListeners();
}

// =============================================
//  SALIR
// =============================================
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

  document.getElementById('setup-back-btn').style.display     = '';
  document.getElementById('player-names-section').style.display = '';
  document.getElementById('start-btn').disabled               = false;
  document.getElementById('loading-msg').textContent          = '';
  document.getElementById('loading-msg').style.color          = '';
  document.getElementById('room-code-input').value            = '';
  document.getElementById('online-status').textContent        = '';

  // Quitar el botón de secreto para la próxima partida
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
  document.getElementById('start-btn').disabled  = false;
  document.getElementById('loading-msg').textContent = '';
  if (gameMode === 'local') {
    document.getElementById('player-names-section').style.display = '';
    document.getElementById('setup-back-btn').style.display = '';
    showScreen('screen-setup');
  } else {
    goHome();
  }
}

// =============================================
//  INIT AL CARGAR LA PÁGINA
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  buildCsmList();
});
