'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Show the designed fallback when the personal image has not been added yet.
  const profileImage = document.querySelector('.profile-photo');
  const portraitFrame = document.querySelector('.portrait-frame');
  if (profileImage && portraitFrame) {
    const showFallback = () => portraitFrame.classList.remove('has-image');
    profileImage.addEventListener('load', () => portraitFrame.classList.add('has-image'));
    profileImage.addEventListener('error', showFallback);
    if (profileImage.complete && profileImage.naturalWidth > 0) portraitFrame.classList.add('has-image');
    else if (profileImage.complete) showFallback();
  }

  // Mobile navigation: close after selection, Escape, or an outside click.
  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  };
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !isOpen);
    });
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 700) closeMenu(); });
  }

  // Reveal elements as they enter the viewport; keep content visible without observer support.
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealElements.forEach(element => revealObserver.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add('is-visible'));
  }

  // Keep the navigation's active state aligned with the section in view.
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const currentId = entry.target.id;
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${currentId}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // The contact form intentionally uses the visitor's email application; no backend is implied.
  const contactForm = document.querySelector('#contact-form');
  const feedback = document.querySelector('#form-feedback');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const formData = new FormData(contactForm);
      const name = String(formData.get('name')).trim();
      const email = String(formData.get('email')).trim();
      const message = String(formData.get('message')).trim();
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:vanshgrowws@gmail.com?subject=${subject}&body=${body}`;
      if (feedback) feedback.textContent = 'Opening your email application with the message prepared. Send it there to complete delivery.';
      window.location.href = mailto;
    });
  }

  // Footer utilities.
  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();
  const backToTop = document.querySelector('.back-top');
  if (backToTop) backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
});
