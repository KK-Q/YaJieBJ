// ============================================
// 盛旺雅洁 — 主 JavaScript
// ============================================

(function() {
  'use strict';

  // ---- Hamburger menu ----
  var hamburger = document.querySelector('.header-hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });

    // Sub-menu toggle
    mobileMenu.querySelectorAll('.has-sub > a').forEach(function(a) {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        var parent = this.parentElement;
        parent.classList.toggle('open');
        parent.querySelector('.sub-nav').classList.toggle('open');
      });
    });
  }

  // ---- Header scroll effect ----
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ---- Active nav highlight ----
  var currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.header-nav a, .mobile-menu a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === currentPath) {
      a.classList.add('active');
    }
  });

  // ---- Swiper init helper ----
  window.initSwiper = function(selector, opts) {
    if (typeof Swiper === 'undefined') return null;
    return new Swiper(selector, Object.assign({
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: false }
    }, opts || {}));
  };

  // ---- Tab switching helper ----
  window.initTabs = function(tabSelector, contentSelector, dataAttr) {
    document.querySelectorAll(tabSelector).forEach(function(tab) {
      tab.addEventListener('click', function() {
        document.querySelectorAll(tabSelector).forEach(function(t) { t.classList.remove('active'); });
        this.classList.add('active');
        var id = this.getAttribute(dataAttr || 'data-tab');
        document.querySelectorAll(contentSelector).forEach(function(c) { c.classList.remove('active'); });
        var el = document.getElementById(id);
        if (el) el.classList.add('active');
      });
    });
  };

  // ---- News feed loader ----
  window.loadNews = function(containerSelector, apiUrl) {
    var container = document.querySelector(containerSelector);
    if (!container) return;
    var url = apiUrl || 'http://admin.yajie.com/api/v2/news/findNewsList';
    if (window.location.href.indexOf('www.yajiebj.com') !== -1) {
      url = 'https://api.yajiebj.com/api/v2/news/findNewsList';
    }
    fetch(url)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (!data || !data.length) return;
        container.innerHTML = '';
        data.forEach(function(news) {
          var li = document.createElement('li');
          li.innerHTML = '<a href="' + (news.url || '#') + '" target="_blank">' +
            (news.title || '') + '</a>' +
            '<span class="news-date">' + (news.time || '') + '</span>';
          container.appendChild(li);
        });
      })
      .catch(function() {});
  };

})();
