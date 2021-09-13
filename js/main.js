$(function(){

    $('.slider-blog__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
        // autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
      });



    var mixer = mixitup('.houses__content');
    
});

