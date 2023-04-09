let icons = document.querySelectorAll('.frequently-asked-questions-icon');
let texts = document.querySelectorAll('.frequently-asked-questions-2');
let headers = document.querySelectorAll('.frequently-asked-questions-header');
let sectionHeaders = document.querySelectorAll('.frequently-asked-questions-1');
let headersBody = document.querySelectorAll('.frequently-asked-questions-body');

icons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    toggleFAQ(icon, index);
  });
});

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    toggleFAQ(icon, index);
  });
});

function toggleFAQ(icon, index) {
  let counter = parseInt(icon.dataset.counter) || 0;
  
  texts[index].classList.toggle('bodyActive');
  sectionHeaders[index].classList.toggle('headerActive');
  headersBody[index].classList.toggle('headerBodyActive');
      
  if (counter === 0) {
    icons[index].classList.add('iconActive1');
    icons[index].classList.remove('iconActive2');
    counter = 1;
  } else {
    icons[index].classList.add('iconActive2');
    icons[index].classList.remove('iconActive1');
    counter = 0;
  }

  icon.dataset.counter = counter;
}