const mobile = document.querySelector('.mobile-cont');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    mobile.classList.toggle('show-menu')
})