  jQuery(document).ready(function($){

    $(".home-page-slide").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: true,
      navText: ["<i class='zmdi zmdi-long-arrow-left'></i>","<i class='zmdi zmdi-long-arrow-right'></i>"]
    });

    $(".logo-carousel").owlCarousel({
      items: 6,
      margin:20,
      nav: false,
      dots: false,
      loop: true,
      autoplay: false,
    });

    $(".case-study-carousel").owlCarousel({
      items: 3,
      margin:20,
      nav: false,
      dots: true,
      loop: true,
      autoplay: false,
    });
    $(".testimonial-carousel").owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      loop: true,
      autoplay: false,
    });

    $(".menu-trigger").on('click', function() {
      $(".off-canvas-menu").addClass("show-off-canvas-menu")
      $(".off-canvas-menu-shade").addClass("active")
    })
    
    $(".search-trigger").on('click', function() {
      $(".canvas-search-bar").addClass("seacrh-bar-active")
    })

    $(".menu-close, .off-canvas-menu-shade ,.search-close").on('click', function() {
      $(".off-canvas-menu").removeClass("show-off-canvas-menu")
      $(".off-canvas-menu-shade").removeClass("active")
      $(".canvas-search-bar").removeClass("seacrh-bar-active")
    })
  
    $(".testimonal-single-box").hover(function(){
      $(".testimonal-single-box").removeClass('active')
      $(this).addClass('active')
    });

    $(".video-play-btn").magnificPopup({
      type: 'video'
    });
    


  
    });
