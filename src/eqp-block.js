export var slideBlock1 = $('.eqp-slide-hover-1');
export var slideBlock2 = $('.eqp-slide-hover-2');
export var slideBlock3 = $('.eqp-slide-hover-3');
export var slideBlock4 = $('.eqp-slide-hover-4');
export var textParagraph1 = $('.eqp-slide-text-paragraph-1');
export var textParagraph2 = $('.eqp-slide-text-paragraph-2');
export var textParagraph3 = $('.eqp-slide-text-paragraph-3');
export var textParagraph4 = $('.eqp-slide-text-paragraph-4');
export var img = $('.eqp-slide-text-block');
export var slide = $('.slide-bar');
export var imgBlock = $('.eqp-slide-text-block');
export var slideBlock1Position = '-77px';
export var slideBlock2Position = '-153px';
export var slideBlock3Position = '-229px';
export var slideBlock4Position = '-305px';
export var media980Px = window.matchMedia('(min-width: 980px)');
export var media1100Px = window.matchMedia('(max-width: 1240px)');
export var colorRed = '#C52626';
export var colorWhite = '#fff';
export var contentSlide1 = 'url(../../img/Heavy-Weights.jpg)';
export var contentSlide2 = 'url(../../img/Tons-Of-Weights.jpg)';
export var contentSlide3 = 'url(../../img/Workout-Machines.jpg)';
export var contentSlide4 = 'url(../../img/Miles-Of-Cardio.jpg)';
export var textActive = {"color": colorWhite, "user-select": "all"};
export var textInactive = {"color": "transparent", "user-select": "none"};
export var timer = '500';
export let hoverTimeout1;
export let hoverTimeout2;
export let hoverTimeout3;
export let hoverTimeout4;

export function hover1() {
slideBlock1.hover(function () {
  if(media980Px.matches){
    hoverTimeout1 = setTimeout(function() {
      slide.css("bottom", slideBlock1Position);
      slide.css("background-color", colorRed);
      img.css("background-image", contentSlide1);
                          
      slide.removeClass('initialActive');
      textParagraph1.css(textActive);
      textParagraph2.css(textInactive);
      textParagraph3.css(textInactive);
      textParagraph4.css(textInactive);
      
      if(media1100Px.matches) {
        imgBlock.css("background-position", "inherit");
      }
      }, timer); 
      }
  },
    function() {
      clearTimeout(hoverTimeout1);
  }
);
}

hover1();

export function hover2() {
slideBlock2.hover(function(){
  if(media980Px.matches){
    hoverTimeout2 = setTimeout(function() {
      slide.css("bottom", slideBlock2Position);
      slide.css("background-color", colorRed);
      img.css("background-image", contentSlide2);
  
      imgBlock.css("background-position", "50% 50%");
      slide.removeClass('initialActive');
      textParagraph2.css(textActive);
      textParagraph1.css(textInactive);
      textParagraph3.css(textInactive);
      textParagraph4.css(textInactive);
  }, timer);
  }
},

  function() {
  clearTimeout(hoverTimeout2);
});
}

hover2();

export function hover3() {
slideBlock3.hover(function(){
  if(media980Px.matches){
    hoverTimeout3 = setTimeout(function() {
      slide.css("bottom", slideBlock3Position);
      slide.css("background-color", colorRed);
      img.css("background-image", contentSlide3);
              
      imgBlock.css("background-position", "50% 50%");
      slide.removeClass('initialActive');
      textParagraph3.css(textActive);
      textParagraph1.css(textInactive);
      textParagraph2.css(textInactive);
      textParagraph4.css(textInactive);
  }, timer);
  }
},

  function() {
  clearTimeout(hoverTimeout3);
});
}

hover3();
   
export function hover4() {
slideBlock4.hover(function(){
  if(media980Px.matches){
    hoverTimeout4 = setTimeout(function() {
      slide.css("bottom", slideBlock4Position);
      slide.css("background-color", colorRed);
      img.css("background-image", contentSlide4);
      
      imgBlock.css("background-position", "50% 50%");
      slide.removeClass('initialActive');
      textParagraph4.css(textActive);
      textParagraph1.css(textInactive);
      textParagraph2.css(textInactive);
      textParagraph3.css(textInactive);
  }, timer);
  }
},

  function() {
  clearTimeout(hoverTimeout4);
});
}

hover4();