// =============================================
//  TABLERO — Construcción y manejo de cartas
// =============================================

function getBoardLayout(count) {
  if (count <= 16) return { cols: 4, rows: 4, dataCount: '16' };
  if (count <= 20) return { cols: 5, rows: 4, dataCount: '20' };
  if (count <= 24) return { cols: 6, rows: 4, dataCount: '24' };
  if (count === 25) return { cols: 5, rows: 5, dataCount: '25' };
  return { cols: 6, rows: Math.ceil(count / 6), dataCount: 'large' };
}

function applyBoardLayout(el, count) {
  const { cols, rows, dataCount } = getBoardLayout(count);
  el.dataset.count = dataCount;
  el.style.setProperty('--cols', cols);

  // After next paint, measure available height and shrink card width if rows overflow
  requestAnimationFrame(() => {
    const gap     = 6;
    const padding = 16; // 8px each side
    const nameH   = 22; // approx card-name height px
    const availH  = el.clientHeight - padding - (rows - 1) * gap;
    const availW  = el.clientWidth  - padding - (cols - 1) * gap;

    // Each card: square image + name label. Card height = cardW + nameH
    // rows * (cardW + nameH) <= availH  →  cardW <= (availH/rows) - nameH
    const maxByHeight = Math.floor(availH / rows) - nameH;
    const maxByWidth  = Math.floor(availW / cols);
    const cardW       = Math.max(36, Math.min(maxByHeight, maxByWidth));

    el.style.setProperty('--cols', cols);
    el.style.gridTemplateColumns = `repeat(${cols}, ${cardW}px)`;
  });
}

function buildBoard(boardId, playerNum) {
  const el = document.getElementById(boardId);
  el.innerHTML = '';
  applyBoardLayout(el, gameChars.length);
  gameChars.forEach(c => {
    el.appendChild(createCard(c, playerNum, 'local'));
  });
}

function buildOnlineBoard() {
  const el = document.getElementById('board-online');
  el.innerHTML = '';
  applyBoardLayout(el, gameChars.length);
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

// ─── Toggle cartas — Local ────────────────────
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

// ─── Toggle cartas — Online ───────────────────
function toggleCardOnline(card) {
  // Siempre se puede marcar/desmarcar — myFlipped es fuente de verdad local
  const name = card.dataset.name;
  if (myFlipped.has(name)) {
    myFlipped.delete(name);
    card.classList.remove('flipped');
  } else {
    myFlipped.add(name);
    card.classList.add('flipped');
  }
}