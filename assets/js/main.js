// X&Y Bakehouse & Bistro Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Hero Video Load Handler & Poster Fade
  const heroVideo = document.getElementById('heroVideo');
  const heroPoster = document.getElementById('heroPoster');

  if (heroVideo && heroPoster) {
    const handleVideoLoaded = () => {
      heroPoster.classList.add('loaded');
    };

    if (heroVideo.readyState >= 3) { // HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA
      handleVideoLoaded();
    } else {
      heroVideo.addEventListener('loadeddata', handleVideoLoaded);
      heroVideo.addEventListener('canplay', handleVideoLoaded);
    }
  }

  // Responsive Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(18, 29, 36, 0.95)';
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
      navbar.style.background = 'rgba(28, 43, 54, 0.85)';
      navbar.style.boxShadow = 'none';
    }
  });
});
