AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff
    const swiperBanner = new Swiper('.swiper-banner .swiper-container', {
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //  },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };
  
  const _swiperReading = () => {
    var swiperRead = new Swiper('.swiper-reading .swiper-container', {
      slidesPerView: 0,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-reading',
        clickable: true,
        breakpoints: {
          640: {
            slidesPerView: 0,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 0,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 0,
            spaceBetween: 0, 
          },
        },
      },
    });
  };

  $('select').change(function(){
    var value = $(this).val();
    if(value == 'FilterBy'){
        $('#News', '#HealthTips', '#SuccessStories', '#CaseStory').show();
    } 
    $('#News').hide();
    if(value == 'News'){
        $('#News').show();
    } 
    $('#HealthTips').hide();
    if(value == 'HealthTips'){
      $('#HealthTips').show();
    } 
    $('#SuccessStories').hide();
    if(value == 'SuccessStories'){
      $('#SuccessStories').show();
    } 
    $('#CaseStory').hide();
    if(value == 'CaseStory'){
      $('#CaseStory').show();
    } 
  })

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _swiperReading();
  };

  return {
    init: init,
  };
})();

const elem = $('header');
const scrolled = () => {
 const threshold = $(document).scrollTop() > 50;
 elem.toggleClass('scrolled', threshold);
 };
$(window).on({ scroll: scrolled });


$('body').css({'overflow':'hidden'});
$(document).bind('scroll',function () { 
     window.scrollTo(0,0); 
});
$(document).unbind('scroll'); 
$('body').css({'overflow':'visible'});
