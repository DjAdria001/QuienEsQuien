// =============================================
//  SETUP — Selección de personajes y pestaña
// =============================================

function switchTab(tab) {
  selectedTab = tab;

  document.getElementById('tab-csm').classList.toggle('active', tab === 'csm');
  document.getElementById('tab-poke').classList.toggle('active', tab === 'pokemon');
  document.getElementById('tab-jjk').classList.toggle('active', tab === 'jjk');
  document.getElementById('tab-re').classList.toggle('active', tab === 'residentevil');

  document.getElementById('panel-csm').classList.toggle('active', tab === 'csm');
  document.getElementById('panel-pokemon').classList.toggle('active', tab === 'pokemon');
  document.getElementById('panel-jjk').classList.toggle('active', tab === 'jjk');
  document.getElementById('panel-residentevil').classList.toggle('active', tab === 'residentevil');
}

function buildCsmList() {
  const el = document.getElementById('csm-char-list');
  el.innerHTML = '';
  CSM_CHARACTERS.forEach(c => {
    const btn = document.createElement('button');
    btn.className    = 'char-toggle selected';
    btn.textContent  = c.name;
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

function buildJjkList() {
  const el = document.getElementById('jjk-char-list');
  el.innerHTML = '';
  JJK_CHARACTERS.forEach(c => {
    const btn = document.createElement('button');
    btn.className    = 'char-toggle selected';
    btn.textContent  = c.name;
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

function buildReList() {
  const el = document.getElementById('re-char-list');
  el.innerHTML = '';
  RE_CHARACTERS.forEach(c => {
    const btn = document.createElement('button');
    btn.className    = 'char-toggle selected';
    btn.textContent  = c.name;
    btn.dataset.name = c.name;
    btn.addEventListener('click', () => {
      if (selectedReChars.has(c.name)) {
        selectedReChars.delete(c.name);
        btn.classList.remove('selected');
      } else {
        selectedReChars.add(c.name);
        btn.classList.add('selected');
      }
    });
    el.appendChild(btn);
  });
}
