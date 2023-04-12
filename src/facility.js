export let facilityElems = document.querySelectorAll('.progress-bar');
export let facilityHeaders = document.querySelectorAll('.progress-bar-header');
export let facilityTexts = document.querySelectorAll('.progress-bar-percent');
export let widths = [1, 1, 1, 1];

export function move(index) {
  let width = widths[index];
  let number = 0;
  let id = 0;

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      number = 0;
    }

     else{
      width += 2;
      facilityElems[index].style.width = width + "%";
      widths[index] = width;
      requestAnimationFrame(frame);
    }
  }

  if (number == 0) {
    number = 1;
    requestAnimationFrame(frame);
  }

  let intervalFunction1 = setInterval(() => {
    let elem = document.querySelector('.progress-bar');
    let header = document.querySelector('.progress-bar-header');
    let elemWidth = elem.offsetWidth;
    let headerWidth = header.offsetWidth;

    if (elemWidth >= headerWidth) {
      facilityHeaders[index].classList.add('facilityActiveHeader');
      clearInterval(intervalFunction1);
    }
  }, 10);

  let intervalFunction2 = setInterval(() => {
    let elem = document.querySelector('.progress-bar');
    let elemWidth = elem.offsetWidth;

    if (elemWidth >= '65') {
      facilityTexts[index].classList.add('facilityTextActive');
      clearInterval(intervalFunction2);
    };

  }, 10);
}

export function scroll() {
document.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;

  function checkElemInView(elem, index) {
    let offsetTop = elem.offsetTop;
    let elemHeight = elem.offsetHeight;

    if (scrollTop + windowHeight > offsetTop && scrollTop < offsetTop + elemHeight) {
      move(index);
    }
  }

  facilityElems.forEach(function(elem, index) {
    requestAnimationFrame(() => {
      checkElemInView(elem, index);
    });
  });
});
}

scroll();