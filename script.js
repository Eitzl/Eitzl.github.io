(function () {
  // ── Active nav link (dynamic, based on current page filename) ──
  var filename = window.location.pathname.split('/').pop() || 'index.html';
  if (filename === '') filename = 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.classList.remove('active');
    if (a.getAttribute('href') === filename) a.classList.add('active');
  });

  // ── Theme toggle ──
  var toggle = document.getElementById('theme-toggle');
  var label = toggle && toggle.querySelector('.toggle-label');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    if (label) label.textContent = theme === 'light' ? 'dark' : 'light';
  }

  applyTheme(localStorage.getItem('theme') || 'dark');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }
})();
