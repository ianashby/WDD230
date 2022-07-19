

// Copyright Date
let date = new Date();
let year = date.getFullYear();
document.querySelector('#copyrightYear').innerHTML = year;


const open = document.querySelector('.open-menu');
const overlay = document.querySelector('.overlay');
const hero = document.querySelector('#hero-msg');
const header = document.querySelector('header');

open.addEventListener('click', function(){
  open.classList.toggle('active');
  overlay.classList.toggle("open");
  hero.classList.toggle("open");
});