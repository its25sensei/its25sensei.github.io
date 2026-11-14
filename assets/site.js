// Shared by both pages: show the "Top" button only after the visitor has scrolled down.
(function () {
  var btn = document.querySelector('.to-top');
  if (!btn) return;
  function update() {
    // Appears after roughly half a screen of scrolling.
    btn.classList.toggle('is-hidden', window.scrollY < window.innerHeight * 0.5);
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();
