const toggleBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = 'LIGHT';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = 'LIGHT';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = 'DARK';
    localStorage.setItem('theme', 'light');
  }
});
