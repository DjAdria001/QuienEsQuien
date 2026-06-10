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

  // Insert a probe card to measure real name label height
  const probe = document.createElement('div');
  probe.className = 'char-card';
  probe.style.cssText = 'position:absolute;visibility:hidden;width:80px';
  probe.innerHTML = '<div class="card-img-wrap" style="aspect-ratio:1/1;width:100%"></div><div class="card-name">A</div>';
  el.appendChild(probe);

  requestAnimationFrame(() => {
    const nameH   = probe.querySelector('.card-name').offsetHeight || 20;
    probe.remove();

    const style   = getComputedStyle(el);
    const gap     = parseFloat(style.gap) || 5;
    const padX    = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) || 16;
    const padY    = parseFloat(style.paddingTop)  + parseFloat(style.paddingBottom) || 16;

    const availW  = el.clientWidth  - padX - (cols - 1) * gap;
    const availH  = el.clientHeight - padY - (rows - 1) * gap;

    // card width from height constraint: rows*(cardW + nameH) = availH
    const maxByH  = Math.floor((availH / rows) - nameH);
    // card width from width constraint
    const maxByW  = Math.floor(availW / cols);

    // Online single-board: prioritise filling width (board is taller, can scroll)
    const isOnline = el.id === 'board-online';
    const cardW   = Math.max(30, isOnline ? maxByW : Math.min(maxByH, maxByW));

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
    card.classList.add('card-flip-in');
    card.addEventListener('animationend', () => card.classList.remove('card-flip-in'), { once: true });
  } else {
    flipped.add(name);
    card.classList.add('card-flip-out');
    card.addEventListener('animationend', () => {
      card.classList.remove('card-flip-out');
      card.classList.add('flipped');
    }, { once: true });
  }
}

// ─── Toggle cartas — Online ───────────────────
function toggleCardOnline(card) {
  // Siempre se puede marcar/desmarcar — myFlipped es fuente de verdad local
  const name = card.dataset.name;
  if (myFlipped.has(name)) {
    myFlipped.delete(name);
    card.classList.remove('flipped');
    card.classList.add('card-flip-in');
    card.addEventListener('animationend', () => card.classList.remove('card-flip-in'), { once: true });
  } else {
    myFlipped.add(name);
    card.classList.add('card-flip-out');
    card.addEventListener('animationend', () => {
      card.classList.remove('card-flip-out');
      card.classList.add('flipped');
    }, { once: true });
  }
}