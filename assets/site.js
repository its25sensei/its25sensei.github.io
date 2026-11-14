// Shared by both pages.

// Show the "Top" button only after the visitor has scrolled down.
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

// "View full screen" for the embedded prototype. The button stays hidden where the browser
// cannot put an element in full screen (for example Safari on iPhone).
(function () {
  if (!document.fullscreenEnabled) return;
  document.querySelectorAll('[data-fullscreen]').forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute('data-fullscreen'));
    if (!target) return;
    btn.hidden = false;
    btn.addEventListener('click', function () { target.requestFullscreen(); });
  });
  document.querySelectorAll('[data-fullscreen-exit]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (document.fullscreenElement) document.exitFullscreen();
    });
  });
})();
