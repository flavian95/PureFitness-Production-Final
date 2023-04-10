var slideBlock1 = $('.eqp-slide-hover-1');
var slideBlock2 = $('.eqp-slide-hover-2');
var slideBlock3 = $('.eqp-slide-hover-3');
var slideBlock4 = $('.eqp-slide-hover-4');
var textParagraph1 = $('.eqp-slide-text-paragraph-1');
var textParagraph2 = $('.eqp-slide-text-paragraph-2');
var textParagraph3 = $('.eqp-slide-text-paragraph-3');
var textParagraph4 = $('.eqp-slide-text-paragraph-4');
var img = $('.eqp-slide-text-block');
var slide = $('.slide-bar');
var imgBlock = $('.eqp-slide-text-block');
var slideBlock1Position = '-77px';
var slideBlock2Position = '-153px';
var slideBlock3Position = '-229px';
var slideBlock4Position = '-305px';
var media980Px = window.matchMedia('(min-width: 980px)');
var media1100Px = window.matchMedia('(max-width: 1240px)');
var colorRed = '#C52626';
var colorWhite = '#fff';
var contentSlide1 = 'url(../img/Heavy-Weights.5d29ddfe.jpg)';
var contentSlide2 = 'url(../img/Tons-Of-Weights.jpg)';
var contentSlide3 = 'url(../img/Workout-Machines.jpg)';
var contentSlide4 = 'url(../img/Miles-Of-Cardio.jpg)';
var textActive = {"color": colorWhite, "user-select": "all"};
var textInactive = {"color": "transparent", "user-select": "none"};
var timer = '500';
let hoverTimeout1;
let hoverTimeout2;
let hoverTimeout3;
let hoverTimeout4;

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