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
      macos:   'Coming soon for macOS',
      ubuntu:  'Coming soon for Ubuntu',
    };
    if (os && labels[os]) {
      cta.textContent = labels[os];
      // If platform is coming soon, CTA scrolls to download section but dims
      if (os === 'macos' || os === 'ubuntu') {
        cta.style.opacity = '0.6';
      }
    }
  }

  // Disable Android download button until link is provided
  // TODO: Remove this block and update href in index.html when APK / Play Store link is ready
  const androidBtn = document.getElementById('android-download-btn');
  if (androidBtn) {
    const href = androidBtn.getAttribute('href');
    if (!href || href === '#') {
      androidBtn.addEventListener('click', function (e) {
        e.preventDefault();
        // Replace button with a "link coming soon" tooltip briefly
        const orig = androidBtn.textContent;
        androidBtn.textContent = 'Link coming soon…';
        setTimeout(() => { androidBtn.textContent = orig; }, 2000);
      });
    }
  }
})();
