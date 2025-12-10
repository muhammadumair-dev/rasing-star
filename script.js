// =======================================
// 1. CAROUSEL SCROLL FUNCTIONALITY
// =======================================

// DOM elements ko target karein
const carouselTrack = document.querySelector('.product-carousel-track');
const leftArrow = document.querySelector('.carousel-arrow.left-arrow');
const rightArrow = document.querySelector('.carousel-arrow.right-arrow');

// Scroll step (aapke original code se liya gaya)
const scrollStep = 320; 

// Scroll Left function
const scrollLeft = () => {
  if (carouselTrack) {
    carouselTrack.scrollBy({
      left: -scrollStep, 
      behavior: 'smooth'
    });
  }
};

// Scroll Right function
const scrollRight = () => {
  if (carouselTrack) {
    carouselTrack.scrollBy({
      left: scrollStep,
      behavior: 'smooth'
    });
  }
};

// Buttons par event listeners lagayein
if (leftArrow) {
  leftArrow.addEventListener('click', scrollLeft);
}

if (rightArrow) {
  rightArrow.addEventListener('click', scrollRight);
}


// =======================================
// 2. MOBILE MENU TOGGLE FUNCTIONALITY (NAVBAR FIX)
// =======================================

const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelector('.mobile-nav-links');

// Toggle function
const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('open');
    // Optional: Body par overflow-hidden lagane ke liye, taki scroll na ho
    // document.body.classList.toggle('menu-open');
};

// Event listener for hamburger button
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
}

// Event listener to close menu when a link is clicked
if (mobileLinks) {
    mobileLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            toggleMobileMenu();
        }
    });
}