(() => {
  const tool = "sanctuary";
  const headerMarkup = "<header class=\"mbe-global-shell\" data-tool=\"sanctuary\">\n      <div class=\"mbe-shell-wrap mbe-shell-main\">\n        <a class=\"mbe-brand-lockup\" href=\"https://mybibleexplorer.com\" aria-label=\"My Bible Explorer home\">\n          <img class=\"mbe-brand-logo\" src=\"/assets/my-bible-explorer-logo.png\" alt=\"My Bible Explorer\" />\n        </a>\n        <div class=\"mbe-site-context\" aria-label=\"Current site\">\n          <a class=\"mbe-back-home\" href=\"https://mybibleexplorer.com\">Back to My Bible Explorer</a>\n          <span class=\"mbe-current-site\">Sanctuary Explorer</span>\n        </div>\n        <nav class=\"mbe-global-nav\" aria-label=\"My Bible Explorer\">\n          <a href=\"https://mybibleexplorer.com\">Home</a>\n          <details class=\"mbe-library-menu\">\n            <summary class=\"mbe-library-toggle\">Library</summary>\n            <div class=\"mbe-library-panel\">\n              <div class=\"mbe-library-grid\">\n              <a class=\"mbe-library-item\" href=\"https://hermeneutics.mybibleexplorer.com\"><span class=\"mbe-library-name\">Hermeneutics</span><span class=\"mbe-library-desc\">Learn to read Scripture faithfully</span></a>\n              <a class=\"mbe-library-item\" href=\"https://psalms.mybibleexplorer.com\"><span class=\"mbe-library-name\">Psalms</span><span class=\"mbe-library-desc\">Worship, lament, praise, and prayer</span></a>\n              <a class=\"mbe-library-item\" href=\"https://daniel.mybibleexplorer.com\"><span class=\"mbe-library-name\">Daniel</span><span class=\"mbe-library-desc\">Prophecy and providence</span></a>\n              <a class=\"mbe-library-item\" href=\"https://revelation.mybibleexplorer.com\"><span class=\"mbe-library-name\">Revelation</span><span class=\"mbe-library-desc\">Symbols, judgment, and final hope</span></a>\n              <a class=\"mbe-library-item\" href=\"https://sanctuary.mybibleexplorer.com\" aria-current=\"page\"><span class=\"mbe-library-name\">Sanctuary</span><span class=\"mbe-library-desc\">A blueprint of salvation</span></a>\n              <a class=\"mbe-library-item\" href=\"https://lastdayevents.mybibleexplorer.com\"><span class=\"mbe-library-name\">Last Day Events</span><span class=\"mbe-library-desc\">Earth's final chapter</span></a>\n              </div>\n            </div>\n          </details>\n          <a href=\"https://mybibleexplorer.com/#donate\">Give</a>\n          <a href=\"mailto:admin@mybibleexplorer.com\">Contact</a>\n        </nav>\n      </div>\n      <div class=\"mbe-shell-wrap mbe-tool-row\">\n        <nav class=\"mbe-tool-nav\" aria-label=\"Sanctuary Explorer sections\">\n          <button class=\"mbe-tool-link nav-tab\" type=\"button\" data-view=\"structure\" data-mbe-href=\"/#structure\">Structure</button>\n          <button class=\"mbe-tool-link nav-tab\" type=\"button\" data-view=\"map\" data-mbe-href=\"/#map\">3D View</button>\n          <button class=\"mbe-tool-link nav-tab\" type=\"button\" data-view=\"ministry\" data-mbe-href=\"/#ministry\">Ministry</button>\n          <button class=\"mbe-tool-link nav-tab\" type=\"button\" data-view=\"attire\" data-mbe-href=\"/#attire\">Priestly Attire</button>\n          <button class=\"mbe-tool-link nav-tab\" type=\"button\" data-view=\"calendar\" data-mbe-href=\"/#calendar\">Feasts</button>\n          <button class=\"mbe-tool-link nav-tab\" type=\"button\" data-view=\"focus1844\" data-mbe-href=\"/#focus1844\">1844 Focus</button>\n          <button class=\"mbe-tool-link nav-tab\" type=\"button\" data-view=\"faq\" data-mbe-href=\"/#faq\">FAQ</button>\n        </nav>\n      </div>\n    </header>";
  const footerMarkup = "<footer class=\"mbe-global-footer\" data-tool=\"sanctuary\">\n      <div class=\"mbe-shell-wrap mbe-footer-wrap\">\n        <a class=\"mbe-footer-brand\" href=\"https://mybibleexplorer.com\">My Bible Explorer</a>\n        <span>Sanctuary Explorer</span>\n        <span>To contact, email <a class=\"mbe-footer-link\" href=\"mailto:admin@mybibleexplorer.com\">admin@mybibleexplorer.com</a></span>\n        <a class=\"mbe-footer-link\" href=\"https://mybibleexplorer.com/#donate\">Give</a>\n        <span>&copy; <span data-mbe-year></span> My Bible Explorer</span>\n      </div>\n    </footer>";
  let applying = false;

  function ensureStylesheet() {
    if (document.querySelector('link[href$="global-shell.css"]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/global-shell.css';
    document.head.appendChild(link);
  }

  function updateYear() {
    document.querySelectorAll('[data-mbe-year]').forEach((node) => {
      node.textContent = new Date().getFullYear();
    });
  }

  function bindToolButtons() {
    document.querySelectorAll('.mbe-global-shell .mbe-tool-link[href*="#"]').forEach((link) => {
      if (link.dataset.mbeHashBound === 'true') return;
      link.dataset.mbeHashBound = 'true';
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href') || '';
        const hash = href.slice(href.indexOf('#'));
        if (!hash || hash === '#') return;
        const target = document.querySelector(hash);
        if (!target) return;
        const scroller = document.querySelector('#main-scroller') || document.scrollingElement || document.documentElement;
        const scrollerRect = scroller === document.scrollingElement || scroller === document.documentElement
          ? { top: 0 }
          : scroller.getBoundingClientRect();
        const targetTop = target.getBoundingClientRect().top - scrollerRect.top + scroller.scrollTop - 18;
        event.preventDefault();
        scroller.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        history.replaceState(null, '', hash);
      });
    });

    document.querySelectorAll('.mbe-global-shell .mbe-tool-link[data-view]').forEach((button) => {
      if (button.dataset.mbeBound === 'true') return;
      button.dataset.mbeBound = 'true';
      button.addEventListener('click', () => {
        const view = button.getAttribute('data-view');
        const nativeButton = document.querySelector('.app-shell > .site-header .nav-tab[data-view="' + view + '"]');
        if (nativeButton) {
          nativeButton.click();
          document.querySelectorAll('.mbe-global-shell .mbe-tool-link[data-view]').forEach((item) => {
            item.classList.toggle('active', item === button);
          });
        }
        const href = button.getAttribute('data-mbe-href');
        if (href && href.startsWith('/#')) {
          history.replaceState(null, '', href);
        }
      });
    });
  }

  function ensureShell() {
    if (!document.body || applying) return;
    applying = true;
    ensureStylesheet();
    document.body.classList.add('mbe-unified-page');
    document.body.setAttribute('data-mbe-tool', tool);

    const shells = [...document.querySelectorAll('.mbe-global-shell')];
    const primaryShell = shells.find((node) => node.getAttribute('data-tool') === tool && node.querySelector('.mbe-tool-nav'));
    shells.forEach((node) => {
      if (node !== primaryShell) node.remove();
    });
    if (primaryShell) {
      if (document.body.firstElementChild !== primaryShell) {
        document.body.insertBefore(primaryShell, document.body.firstChild);
      }
    } else {
      document.body.insertAdjacentHTML('afterbegin', headerMarkup);
    }

    const footers = [...document.querySelectorAll('.mbe-global-footer')];
    const primaryFooter = footers.find((node) => node.getAttribute('data-tool') === tool);
    footers.forEach((node) => {
      if (node !== primaryFooter) node.remove();
    });
    if (!primaryFooter) {
      document.body.insertAdjacentHTML('beforeend', footerMarkup);
    }

    updateYear();
    bindToolButtons();
    applying = false;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureShell, { once: true });
  } else {
    ensureShell();
  }

  window.addEventListener('load', () => {
    ensureShell();
    window.setTimeout(ensureShell, 250);
    window.setTimeout(ensureShell, 900);
    window.setTimeout(ensureShell, 1800);
  });

  const observer = new MutationObserver(() => {
    if (!document.body) return;
    if (!document.querySelector('.mbe-global-shell') || document.body.getAttribute('data-mbe-tool') !== tool) {
      ensureShell();
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
