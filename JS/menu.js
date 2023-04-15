const menu = document.querySelector('.menu');
const menuLogo = document.querySelector('.menu__logo');
const menuBurger = document.querySelector('.burger');
const menuLinks = document.querySelector('.menu-links');
const burgerLines = document.querySelectorAll('.burger__line');
let menuIsOpen = false;

menuBurger.onclick = () => {
    if(! menuIsOpen) {
        burgerLines[0].classList.add('burger__line--X1');
        burgerLines[1].classList.add('burger__line--X2');
        burgerLines[2].classList.add('burger__line--hide');
        menu.classList.add('menu--open');
        menuLinks.classList.add('menu-links--open');
        menuLogo.classList.add('menu__logo--shown');
    } else {
        burgerLines[0].classList.remove('burger__line--X1');
        burgerLines[1].classList.remove('burger__line--X2');
        burgerLines[2].classList.remove('burger__line--hide');
        menu.classList.remove('menu--open');
        menuLinks.classList.remove('menu-links--open');
        menuLogo.classList.remove('menu__logo--shown');
    }

    menuIsOpen = ! menuIsOpen;
}