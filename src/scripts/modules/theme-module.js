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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50, 
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
