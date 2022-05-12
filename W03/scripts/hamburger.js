//  Hamburger Menu

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');
});
