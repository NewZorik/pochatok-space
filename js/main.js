    $(document).ready(function() {
        $('.header__burger').click(function(event) {
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });

    $('#main-slider').owlCarousel({
      loop:true,
      margin:60,
      nav:false,
      autoplay:true,
      smartSpeed:1000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
    });

        $('#news-slider').owlCarousel({
          loop:true,
          margin:60,
          nav:false,
          autoplay:false,
          smartSpeed:1000,
          autoplayHoverPause: true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:3
              }
          }
        });