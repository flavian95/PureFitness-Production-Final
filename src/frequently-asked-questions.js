export let icons = document.querySelectorAll('.frequently-asked-questions-icon');
export let texts = document.querySelectorAll('.frequently-asked-questions-2');
export let headers = document.querySelectorAll('.frequently-asked-questions-header');
export let sectionHeaders = document.querySelectorAll('.frequently-asked-questions-1');
export let headersBody = document.querySelectorAll('.frequently-asked-questions-body');

export function click1() {
icons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    toggleFAQ(icon, index);
  });
});
}

click1();


export function click2() {
headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    toggleFAQ(header, index);
  });
});
}

click2();

export function toggleFAQ(icon, index) {
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