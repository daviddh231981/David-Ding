// small helper for DOM
const $ = (s, root = document) => root.querySelector(s);

document.addEventListener('DOMContentLoaded', () => {
  // set year
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // theme toggle: remember in localStorage
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const current = localStorage.getItem('theme') || (root.classList.contains('light') ? 'light' : 'dark');
  if (current === 'light') root.classList.add('light');
  updateThemeButton();

  if (themeToggle){
    themeToggle.addEventListener('click', () => {
      const nowLight = root.classList.toggle('light');
      localStorage.setItem('theme', nowLight ? 'light' : 'dark');
      updateThemeButton();
    });
  }

  function updateThemeButton(){
    if (!themeToggle) return;
    const isLight = root.classList.contains('light');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-pressed', String(isLight));
  }

  // simple contact form handler (no backend) — simulate send
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name');
      status.textContent = 'Sending…';
      setTimeout(() => {
        status.textContent = `Thanks ${name || ''}! This is a demo form — configure an endpoint to send messages.`;
        form.reset();
      }, 900);
    });
  }
});
