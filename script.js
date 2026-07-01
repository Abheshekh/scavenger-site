(function () {
  // Detect OS and highlight the matching download card + update hero CTA
  function detectOS() {
    const ua = navigator.userAgent.toLowerCase();
    const platform = (navigator.userAgentData?.platform || navigator.platform || '').toLowerCase();

    if (/android/.test(ua)) return 'android';
    if (/iphone|ipad|ipod/.test(ua)) return null; // iOS — no app yet
    if (/win/.test(platform) || /windows/.test(ua)) return 'windows';
    if (/mac/.test(platform) || /macintosh|mac os x/.test(ua)) return 'macos';
    if (/linux/.test(platform) || /linux/.test(ua)) return 'ubuntu';
    return null;
  }

  const os = detectOS();
  const cardMap = {
    windows: 'card-windows',
    android: 'card-android',
    macos:   'card-macos',
    ubuntu:  'card-ubuntu',
  };

  if (os && cardMap[os]) {
    const card = document.getElementById(cardMap[os]);
    if (card) card.classList.add('os-match');
  }

  // Update hero CTA label based on detected OS
  const cta = document.getElementById('hero-cta');
  if (cta) {
    const labels = {
      windows: 'Download for Windows',
      android: 'Download for Android',
      macos:   'Download for macOS',
      ubuntu:  'Coming soon for Ubuntu',
    };
    if (os && labels[os]) {
      cta.textContent = labels[os];
      // Ubuntu is still coming soon — dim its CTA. macOS is now available.
      if (os === 'ubuntu') {
        cta.style.opacity = '0.6';
      }
    }
  }

  // ── Modal (macOS "first open" help) ──────────────────────────────────────
  function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.hidden = false;
  }
  function closeModal(m) { if (m) m.hidden = true; }

  document.querySelectorAll('[data-modal-open]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(btn.getAttribute('data-modal-open'));
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    // Click on the dimmed backdrop (but not the dialog) closes it.
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal(overlay);
    });
    const closeBtn = overlay.querySelector('[data-modal-close]');
    if (closeBtn) closeBtn.addEventListener('click', function () { closeModal(overlay); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay:not([hidden])').forEach(closeModal);
    }
  });

})();
