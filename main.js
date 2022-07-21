'use strict';

const bar = document.querySelector('.bar');
bar.addEventListener('click', () => {
  const menu = document.querySelector('.responsive-menu');
  
  menu.classList.toggle('show');
})