// Hamburger Menu
let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');
});

// Copyright Date
let date = new Date();
let year = date.getFullYear();
document.querySelector('#copyrightYear').innerHTML = year;