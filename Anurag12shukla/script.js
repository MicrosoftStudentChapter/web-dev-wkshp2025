const themes = {
  daylight: {
    bg: '#f8fafc',
    text: '#0f172a',
    accent: '#2563eb'
  },
  sunset: {
    bg: '#fff1f2',
    text: '#4c0519',
    accent: '#db2777'
  },
  midnight: {
    bg: '#020617',
    text: '#e0e7ff',
    accent: '#38bdf8'
  }
};

function applyTheme(themeKey) {
  const theme = themes[themeKey];
  if (!theme) return;

  document.documentElement.style.setProperty('--bg', theme.bg);
  document.documentElement.style.setProperty('--text', theme.text);
  document.documentElement.style.setProperty('--accent', theme.accent);
}

function registerThemeButtons() {
  const buttons = document.querySelectorAll('button[data-theme]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-theme');
      applyTheme(key);
    });
  });
}

function setYear() {
  const footerYear = document.getElementById('year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  registerThemeButtons();
  setYear();
});
