const body = document.getElementsByClassName('body')[0];
const nav = document.getElementsByClassName('nav')[0];
const navMenu = document.getElementsByClassName('nav-menu')[0];
const navLinks =  document.getElementsByClassName('nav-links-body')[0];
const navIcons =  document.getElementsByClassName('nav-icons-body')[0];
const navLocation = document.getElementsByClassName('nav-location')[0];

navMenu.addEventListener('click',function (){
   navLinks.classList.toggle('navActive');
   navIcons.classList.toggle('navActive');
   navMenu.classList.toggle('menuActive');
   nav.classList.toggle('navMenuActive');
   body.classList.toggle('navBodyActive');
   window.scrollTo (0, 0);
});

navLocation.addEventListener('click', function () {
   body.classList.toggle('navLocationActive');
   navLinks.classList.remove('navActive');
   navIcons.classList.remove('navActive');
   navMenu.classList.remove('menuActive');
   nav.classList.remove('navMenuActive');
   body.classList.remove('navBodyActive');
});