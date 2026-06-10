// =============================================
//  UTILS — Funciones de utilidad general
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

// Cerrar modal-secret al clicar en el overlay (fuera del contenido)
document.addEventListener('DOMContentLoaded', () => {
  const secretOverlay = document.getElementById('modal-secret');
  if (secretOverlay) {
    secretOverlay.addEventListener('click', (e) => {
      if (e.target === secretOverlay) closeModal('modal-secret');
    });
  }
});

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

async function copyRoomCode() {
  const code = document.getElementById('room-code-display').textContent.trim();
  if (!code || code === '----') return;
  try {
    await navigator.clipboard.writeText(code);
    const btn = document.querySelector('.btn-copy-code');
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = '✅ ¡Copiado!';
      btn.style.background = 'var(--green, #22c55e)';
      setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 1800);
    }
  } catch {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

async function pasteRoomCode() {
  try {
    const text = await navigator.clipboard.readText();
    const input = document.getElementById('room-code-input');
    if (input) input.value = text.trim().toUpperCase().slice(0, 6);
  } catch {
    // Si no hay permisos, focus en el input para que el usuario pegue manualmente
    const input = document.getElementById('room-code-input');
    if (input) input.focus();
  }
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function cancelOnlineListeners() {
  if (!window.FB) return;
  const { off } = window.FB;
  onlineListeners.forEach(({ ref: r, listener }) => {
    try { off(r, 'value', listener); } catch {}
  });
  onlineListeners = [];
}

function generateQuestionMarks() {
  const container = document.getElementById('bg-questions');
  if (!container) return;
  const symbols = ['?', '¿', '?', '¿', '?'];
  const count = 22;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'q-symbol';
    const size     = Math.random() * 60 + 30; // 30px – 90px
    const left     = Math.random() * 100;
    const duration = Math.random() * 12 + 8;  // 8s – 20s
    const delay    = Math.random() * 15;
    const sym      = symbols[Math.floor(Math.random() * symbols.length)];
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
