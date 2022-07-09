// Prevent Right Clicking & Saving Images
document.addEventListener('contextmenu', event => event.preventDefault());

// Hamburger Menu
let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');
});