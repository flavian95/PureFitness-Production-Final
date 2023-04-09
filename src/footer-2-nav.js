const body = document.getElementsByClassName('body')[0];
const nav = document.getElementsByClassName('nav')[0];
const navMenu = document.getElementsByClassName('nav-menu')[0];
const navLinks =  document.getElementsByClassName('nav-links-body')[0];
const navIcons =  document.getElementsByClassName('nav-icons-body')[0];
const mainContainer = document.getElementsByClassName('main-container')[0];

navMenu.addEventListener('click',function (){
   navLinks.classList.toggle('navActive');
   navIcons.classList.toggle('navActive');
   navMenu.classList.toggle('menuActive');
   nav.classList.toggle('navMenuActive');
   body.classList.toggle('navBodyActive');
   window.scrollTo (0, 0);
   mainContainer.classList.toggle('footerActive');
});