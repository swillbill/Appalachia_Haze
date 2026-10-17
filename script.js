/**
 * APPALACHIA HAZE - HAND-DRAWN TRAD-GRASS ZINE
 * Client-side script for interactive features
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Sticky Navbar Shadow on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
      }
    });
  }

  // 4. Field Tape Video Switcher
  const videoCards = document.querySelectorAll('.tape-card, .portal-card, .video-card-zine, .video-card');
  const mainVideoIframe = document.getElementById('mainVideoIframe');
  const mainVideoTitle = document.getElementById('mainVideoTitle');
  const mainVideoDesc = document.getElementById('mainVideoDesc');
  const mainVideoStamp = document.getElementById('mainVideoStamp');

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      videoCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const src = card.getAttribute('data-video-src');
      const title = card.getAttribute('data-video-title');
      const desc = card.getAttribute('data-video-desc');
      const indicator = card.querySelector('.card-indicator')?.textContent.trim() || '01';

      if (mainVideoIframe && src) {
        mainVideoIframe.style.opacity = '0.3';
        setTimeout(() => {
          mainVideoIframe.src = src;
          mainVideoIframe.style.opacity = '1';
        }, 180);
      }
      if (mainVideoTitle && title) {
        mainVideoTitle.textContent = title;
      }
      if (mainVideoDesc && desc) {
        mainVideoDesc.textContent = desc;
      }
      if (mainVideoStamp) {
        mainVideoStamp.textContent = `PROMO ${indicator} • ASHEVILLE ARCHIVE`;
      }

      // Smooth scroll if on mobile screen
      if (window.innerWidth < 768) {
        document.getElementById('mainVideoContainer').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // 5. Booking Inquiry Dispatch Form Handler
  const bookingForm = document.getElementById('bookingForm');
  const formFeedback = document.getElementById('formFeedback');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        showFeedback('✦ Please fill out all required fields marked with (*).', 'error');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showFeedback('✦ Please enter a valid email address.', 'error');
        return;
      }

      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> SENDING DISPATCH...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        bookingForm.reset();
        showFeedback(`✦ Thank you, ${name}! Your booking dispatch has been sent to Appalachia Haze. We will get back to you promptly!`, 'success');
      }, 1200);
    });
  }

  function showFeedback(text, type) {
    if (!formFeedback) return;
    formFeedback.textContent = text;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // 7. Mobile App Bottom Navigation Active State Tracking
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  const trackedSections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    trackedSections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      bottomNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentId}`) {
          item.classList.add('active');
        }
      });
    }
  });

  // 8. Register Service Worker for PWA / Mobile App Support
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('Appalachia Haze PWA registered successfully:', reg.scope);
        })
        .catch((err) => {
          console.log('PWA registration error:', err);
        });
    });
  }
});

