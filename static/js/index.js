$(document).ready(function () {

  /*评论*/
  $(".comment-carousel-carousel").owlCarousel({
    autoPlay: 6000,
    items: 4,
    navigation: false,
    pagination: true,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
  });

  // 首页维度控制轮播
  if ($('#tab-control').length && $('#dimension-content').length) {
    const control = new Swiper('#tab-control', {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesVisibility: true,
      breakpoints: {
        577: {
          slidesPerView: 4
        }
      }
    });

    const contentSwiepr = new Swiper('#dimension-content', {
      autoplay: {
        delay: 2000
      },
      disableOnInteraction: false,
      thumbs: {
        swiper: control,
      }
    });
  }

  // 首页操作流程
  if ($('#operation-content').length && $('#operation-control').length) {
    const control = new Swiper('#operation-control', {
      slidesPerView: 100,
      watchSlidesVisibility: true
    });

    const contentSwiepr = new Swiper('#operation-content', {
      autoplay: false,
      effect: 'fade',
      thumbs: {
        swiper: control,
      },
      autoHeight: true
    });
  }

  // 首页案例分析
  if ($('#case-analyze').length) {
    new Swiper('#case-analyze', {
      autoplay: {
        delay: 3000
      },
      loop: true,
      spaceBetween: 20,
      effect: 'coverflow',
      coverflowEffect: {
        depth: 1000,
        stretch: '30%',
        rotate: 0,
        modifier: 1,
        slideShodows: false
      },
      disableOnInteraction: false,
      navigation: {
        nextEl: '#case-analyze .next-button',
        prevEl: '#case-analyze .prev-button'
      }
    });
  }

  // 首页补单黑科技
  if($('#black-technology').length) {
    console.log('black');
    new Swiper('#black-technology', {
      autoplay: {
        delay: 3000
      },
      slidesPerView: 1,
      disableOnInteraction: false,
      pagination: {
        el: '#black-technology .swiper-pagination',
        clickable: true
      }
    })
  }


  // 移动端导航栏
  const openMenuBtn = $('i#open-menu');
  const closeMenuBtn = $('i#close-menu');
  const menu = $('#mobile-nav');
  const mask = $('#mobile-mask');
  if(openMenuBtn.length && closeMenuBtn.length && menu.length && mask.length) {
    openMenuBtn.click(function() {
      menu.addClass('show');
      mask.addClass('show');
    });

    closeMenuBtn.click(function() {
      menu.removeClass('show');
      mask.removeClass('show');
    });

    mask.click(function() {
      menu.removeClass('show');
      mask.removeClass('show');
    });

    $(window).scroll(debounce(function() {
      if(menu.hasClass('show')) {
        menu.removeClass('show');
        mask.removeClass('show');
      }
    }));
  }


  function debounce(fn, wait=200) {
    let timeout = null;
    let self = null;
    let args = [];

    return function() {
      self = this;
      args = arguments;
      clearTimeout(timeout);

      timeout = setTimeout(function() {
        clearTimeout(timeout);
        fn.apply(self, args);
      }, wait);
    }
  }
})