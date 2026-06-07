// Copia de memes de game.js


// =============================================
//  DATOS — Personajes de Chainsaw Man
// =============================================
const CSM_CHARACTERS = [
  { name: "Denji",         img: "https://i.pinimg.com/736x/c3/0e/31/c30e316955381cabfcb1583da89214d7.jpg" },
  { name: "Makima",        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXN6aIaQJwHZUfD5obRDenQ5FSg86Xn_pNQ&s" },
  { name: "Power",         img: "https://images.steamusercontent.com/ugc/2100425147026543778/8EEFB2DF2422255EB2031F02711A2D4C3344E0D1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" },
  { name: "Aki",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MN-CgWDF-yys2j5CHD9TI6IjKiUAFY4rDA&s" },
  { name: "Himeno",        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOo5V9t8MK18xQ2nx-4s-CSLQxFMfSvxezg&s" },
  { name: "Kishibe",       img: "https://i.redd.it/8erywl6q63m41.jpg" },
  { name: "Kobeni",        img: "https://media.tenor.com/HYvUm2u72KsAAAAi/chainsaw-man-kobeni.gif" },
  { name: "Reze",          img: "https://media1.tenor.com/m/3Sykma8la9gAAAAC/reze-tongue-out-reze-chainsaw-man-moving-her-head.gif" },
  { name: "Quanxi",        img: "https://media1.tenor.com/m/Np63XQmt_XIAAAAd/quanxi-stare-quanxi.gif" },
  { name: "Beam",          img: "https://media1.tenor.com/m/bSls_UJPZ3EAAAAC/beam-pool.gif" },
  { name: "Galgali",       img: "https://media1.tenor.com/m/dXe8aznPEm0AAAAC/chainsaw-man-chainsaw-man-the-movie.gif" },
  { name: "Katana-Man",    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76TmRESUgT9zHdKiPcK2sXWG0YXPwYduvrA&s" },
  { name: "Angel Devil",   img: "https://media1.tenor.com/m/Xm5UUXHIRL8AAAAC/angel-chainsawman.gif" },
  { name: "Cosmo",         img: "https://media1.tenor.com/m/K6fG003HfgUAAAAd/cosmo-chainsaw-man.gif" },
  { name: "Pochita",       img: "https://media.tenor.com/v3-Ju08pVzcAAAAi/super-speed-pochita.gif" },
  { name: "Nayuta",        img: "https://media1.tenor.com/m/1424xR5RASIAAAAC/chainsaw-man-csm.gif" },
  { name: "Future Devil",  img: "https://media1.tenor.com/m/P9V_gR2qOz4AAAAC/chainsaw-man-future-devil.gif" },
  { name: "Asa Mitaka",    img: "https://media1.tenor.com/m/DvM78Y83N0wAAAAC/asa-mitaka-faces.gif" },
  { name: "Yoru",          img: "https://media1.tenor.com/m/8uXbIFBvKMEAAAAC/yoru-dog.gif" },
  { name: "Morti",         img: "https://media1.tenor.com/m/MYtZWi50ZSYAAAAC/chainsaw-man-not-listening.gif" },
  { name: "Falling Devil", img: "https://media1.tenor.com/m/ZtHl5r-li2UAAAAC/falling-devil-falling-csm.gif" },
  { name: "Fox Devil",     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRth05SiHmtAiFjEb2Nj2Mc1yr6ahu8Mj6E-g&s" },
  { name: "Fami",          img: "https://media1.tenor.com/m/nlCSdIFT4hwAAAAd/chainsaw-man-csm.gif" },
  { name: "Barem",         img: "https://media1.tenor.com/m/QIj37sJM_OEAAAAC/barem-bridge-barem.gif" },
  { name: "Fumiko",        img: "https://pbs.twimg.com/media/G0ACd1xXsAI1dw1.jpg" },
];

const JJK_CHARACTERS = [
  { name: "Yuji Itadori",           img: "https://i.pinimg.com/736x/79/42/6d/79426d91030244f605ea12879174e0fd.jpg" },
  { name: "Megumi Fushiguro",       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpITnLPiaf_NC38a8Zrwz8QVEc8bTcmtdDQ&s" },
  { name: "Nobara Kugisaki",        img: "https://media.tenor.com/1i64WUMDpKsAAAAe/nobara-jujutsu.png" },
  { name: "Satoru Gojo",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhFEufPpORTBzP_3PHJMYZ7W7Dl6d456dJw&s" },
  { name: "Suguru Geto",            img: "https://i.redd.it/2xd2n91hco091.jpg" },
  { name: "Kenjaku",                img: "https://media.tenor.com/7iAF88pUAyEAAAAe/geto-no-brain.png" },
  { name: "Ryomen Sukuna",          img: "https://media.tenor.com/zr2tYVuEY1IAAAAe/thukuna.png" },
  { name: "Toge Inumaki",           img: "https://media.tenor.com/cHq-Xcl4kwMAAAAe/inumaki-salmon.png" },
  { name: "Panda",                  img: "https://media.tenor.com/CU-rjMjHmpEAAAAe/panda-jjk.png" },
  { name: "Maki Zenin",             img: "https://media1.tenor.com/m/0aBEQuoZlY8AAAAC/yuji-itadori-yuji.gif" },
  { name: "Toji Fushiguro",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoq_zJqeKLVAYpcnk1qRPIOCpG727i2MjBA&s" },
  { name: "Kento Nanami",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28mDiW8_Vb0tRBHPr3pkAcMUIqUfcoTw9hw&s" },
  { name: "Mahito",                 img: "https://static.wikia.nocookie.net/fa43e6ad-ac85-449d-a3f2-bd9fdc00ace9/scale-to-width/755" },
  { name: "Jogo",                   img: "https://media.tenor.com/mimVflzgoA4AAAAe/jogo-jujutsu-kaisen.png" },
  { name: "Hanami",                 img: "https://i.redd.it/axi6n2yriky61.jpg" },
  { name: "Choso",                  img: "https://media.tenor.com/7mZbjm-rgyUAAAAj/choso-in-pain.gif" },
  { name: "Yuta Okkotsu",           img: "https://media1.tenor.com/m/i-SPXGavbR0AAAAd/yuta-jujutsu-kaisen.gif" },
  { name: "Rika",                   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-svv80d519YfSnBUWzkzpHdP_ZUns_3o_yA&s" },
  { name: "Aoi Todo",               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRjCXSbaTagqAHiahzqLeE8sISz2oBB4OXA&s" },
  { name: "Mai Zenin",              img: "https://i.redd.it/vrwdnk9ic3171.jpg" },
  { name: "Naoya Zenin",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgvV5Ffag71FjOVMrwogHH7mTxr8_bgd_cQ&s" },
  { name: "Mei Mei",                img: "https://hips.hearstapps.com/hmg-prod/images/jujutsu-kaisen-mei-mei-6586a5fb79367.jpg?crop=1xw:1xh;0,0.104xh" },
  { name: "Kinji Hakari",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQjpD0yAK22gBUAalAWIdtJXxdRN7CfGebA&s" },
  { name: "Kirara Hoshiguma",       img: "https://media.tenor.com/gYMSIrqFvfwAAAAe/kirara-kirara-hoshi.png" },
  { name: "Kokichi Muta/Mechamaru", img: "https://i.pinimg.com/736x/4a/ff/30/4aff3047797a811acd053f72d131c0d5.jpg" },
  { name: "Yuki Tsukumo",           img: "https://media.tenor.com/pB7mP_EM_z0AAAAe/yuki-jjk.png" },
  { name: "Utahime Iori",           img: "https://media1.tenor.com/m/wypkub9yEncAAAAd/ashi-ashi-utahime.gif" },
  { name: "Shoko Ieiri",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrglW9H6qnogTpW7TE5erXjAzJ9_iRxf3GnA&s" },
  { name: "Masamichi Yaga",         img: "https://media.tenor.com/rzKhK3gxQCcAAAAe/masamichi-yaga-god-damn.png" },
  { name: "Atsuya Kusakabe",        img: "https://media1.tenor.com/m/Q8gI58EZhqYAAAAC/jujutsukaisen-kusakabe.gif" },
  { name: "Kasumi Miwa",            img: "https://media1.tenor.com/m/9KhRw2oz_AcAAAAC/miwa-jujutsu-kaisen.gif" },
  { name: "Momo Nishimiya",         img: "https://preview.redd.it/momo-has-become-popular-on-twitter-i-wonder-why-v0-ogz19w9lbfug1.png?auto=webp&s=465e1c795fee472ae23c841766881f481e09b0ce" },
  { name: "Noritoshi Kamo",         img: "https://64.media.tumblr.com/16a4316317dd5e824001edf7fa36f6a5/12134505a2e7277c-67/s640x960/f59de9e8828728778409636e0f1b80ea2e559632.jpg" },
  { name: "Takuma Ino",             img: "https://preview.redd.it/daily-reminder-that-ino-hasnt-used-his-4th-beast-bro-isnt-v0-xjerof8dmdjc1.jpg?width=602&format=pjpg&auto=webp&s=4594ce8b8d15708a5dc53c5407fb85db5b594c5c" },
  { name: "Naobito Zenin",          img: "https://preview.redd.it/naobito-meme-not-a-slander-v0-tzk2wir3ys3h1.png?auto=webp&s=94503e37aa7260082e37e6ddab592f7a344c9a58" },
  { name: "Fumihiko Takaba",        img: "https://i.redd.it/the-takaba-meme-contest-continues-v0-n0kjslajlwyb1.png?width=1080&format=png&auto=webp&s=b862673ec370b875722c6f5566efff12241d8afb" },
  { name: "Hiromi Higuruma",        img: "https://media.tenor.com/0iDXJGZMKGwAAAAe/higuruma-jjk.png" },
  { name: "Hana Kurusu",            img: "https://i.redd.it/sdao5ovwtl9c1.png" },
  { name: "Hajime Kashimo",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4o4QnEsbssQzT0D0canrxuZv_gwhfSq5uQ&s" },
  { name: "Ryu Ishigori",           img: "https://media.tenor.com/nH_ZTfp0QpIAAAAe/jjk-ryu-jjk.png" },
  { name: "Reggie Star",            img: "https://media.tenor.com/KeYRdHrX13IAAAAe/jujutsu-kaisen-season-3-jujutsu-kaisen-meme.png" },
  { name: "Ui Ui",                  img: "https://hips.hearstapps.com/hmg-prod/images/jujutsu-kaisen-mei-mei-hermano-6586bfd23540d.jpg" },
  { name: "Miguel Oduol",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7GLHJl_IYXHmJkpSXMb1gc7HigTbX4nMXg&s" },
  { name: "Dagon",                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWNL9dTx9giVP9x3Zod4m9AGiqcJsDy00Ww&s" },
  { name: "Mahoraga",               img: "https://preview.redd.it/guys-why-are-they-no-yuki-memes-v0-hqvx0bv7c2rb1.jpg?auto=webp&s=aca00abcdbf4db23e484983fad44304bffbcd3b5" },
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
let selectedJjkChars = new Set(JJK_CHARACTERS.map(c => c.name));
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
  document.getElementById('tab-jjk').classList.toggle('active', tab === 'jjk');

  document.getElementById('panel-csm').classList.toggle('active', tab === 'csm');
  document.getElementById('panel-pokemon').classList.toggle('active', tab === 'pokemon');
  document.getElementById('panel-jjk').classList.toggle('active', tab === 'jjk');
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
//  SETUP — Lista de personajes JJK
// =============================================
function buildJjkList() {
  const el = document.getElementById('jjk-char-list');
  el.innerHTML = '';

  JJK_CHARACTERS.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'char-toggle selected';
    btn.textContent = c.name;
    btn.dataset.name = c.name;

    btn.addEventListener('click', () => {
      if (selectedJjkChars.has(c.name)) {
        selectedJjkChars.delete(c.name);
        btn.classList.remove('selected');
      } else {
        selectedJjkChars.add(c.name);
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

} else if (selectedTab === 'jjk') {

  if (selectedJjkChars.size < 9) {
    msg.textContent = '⚠️ Selecciona al menos 9 personajes';
    msg.style.color = 'var(--red)';
    return;
  }

  gameChars = JJK_CHARACTERS.filter(c => selectedJjkChars.has(c.name));
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
        hideWaitingTurnBanner();
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
  const msg = document.getElementById('waiting-turn-msg');
  const banner = document.getElementById('waiting-turn-inline');
  const guessBtn = document.getElementById('guess-btn');
  const endTurnBtn = document.getElementById('end-turn-btn');
  const guessInput = document.getElementById('guess-input');
  if (msg) msg.textContent = `Turno de ${rival}... espera.`;
  if (banner) banner.style.display = 'flex';
  if (guessBtn) guessBtn.disabled = true;
  if (endTurnBtn) endTurnBtn.disabled = true;
  if (guessInput) { guessInput.disabled = true; guessInput.style.opacity = '0.4'; }
}

function hideWaitingTurnBanner() {
  const banner = document.getElementById('waiting-turn-inline');
  const guessBtn = document.getElementById('guess-btn');
  const endTurnBtn = document.getElementById('end-turn-btn');
  const guessInput = document.getElementById('guess-input');
  if (banner) banner.style.display = 'none';
  if (guessBtn) guessBtn.disabled = false;
  if (endTurnBtn) endTurnBtn.disabled = false;
  if (guessInput) { guessInput.disabled = false; guessInput.style.opacity = '1'; }
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
  const count = gameChars.length;
  el.dataset.count = count <= 16 ? '16' : count <= 20 ? '20' : count <= 24 ? '24' : 'large';
  gameChars.forEach(c => {
    el.appendChild(createCard(c, playerNum, 'local'));
  });
}

function buildOnlineBoard() {
  const el = document.getElementById('board-online');
  el.innerHTML = '';
  const count = gameChars.length;
  el.dataset.count = count <= 16 ? '16' : count <= 20 ? '20' : count <= 24 ? '24' : 'large';
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
  // Siempre se puede marcar/desmarcar cartas, sea o no tu turno
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
  hideWaitingTurnBanner();
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
  buildJjkList();
  generateQuestionMarks();
});

function generateQuestionMarks() {
  const container = document.getElementById('bg-questions');
  if (!container) return;
  const symbols = ['?', '¿', '?', '¿', '?'];
  const count = 22;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'q-symbol';
    const size = Math.random() * 60 + 30;
    const left = Math.random() * 100;
    const duration = Math.random() * 12 + 8;
    const delay = Math.random() * 15;
    const sym = symbols[Math.floor(Math.random() * symbols.length)];
    el.textContent = sym;
    el.style.cssText = `
      font-size: ${size}px;
      left: ${left}%;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;
    container.appendChild(el);
  }
}
