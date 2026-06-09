// =============================================
//  ESTADO GLOBAL
// =============================================
let gameMode         = null;  // 'local' | 'online'
let selectedTab      = 'csm';
let selectedCsmChars = new Set(CSM_CHARACTERS.map(c => c.name));
let selectedJjkChars = new Set(JJK_CHARACTERS.map(c => c.name));
let selectedReChars  = new Set(RE_CHARACTERS.map(c => c.name));
let selectedHorrorChars = new Set(HORROR_CHARACTERS.map(c => c.name));
let selectedDbdChars    = new Set(DBD_CHARACTERS.map(c => c.name));
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
let gameStarted      = false;  // evita doble inicio online
