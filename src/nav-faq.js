export const body = document.getElementsByClassName('body')[0];
export const nav = document.getElementsByClassName('nav')[0];
export const navMenu = document.getElementsByClassName('nav-menu')[0];
export const navLinks =  document.getElementsByClassName('nav-links-body')[0];
export const navIcons =  document.getElementsByClassName('nav-icons-body')[0];
export const header = document.getElementsByClassName('header')[0];

export function navToggler() {
navMenu.addEventListener('click',function (){
   navLinks.classList.toggle('navActive');
   navIcons.classList.toggle('navActive');
   navMenu.classList.toggle('menuActive');
   nav.classList.toggle('navMenuActive');
   body.classList.toggle('navBodyActive');
   window.scrollTo (0, 0);
   header.classList.toggle('mainNavActive');
});
}

navToggler();