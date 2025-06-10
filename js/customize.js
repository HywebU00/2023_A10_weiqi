// -----  基本功能開關   ---------------------------------------------------
topNav(); // 手機版顯示nav選單
navSticky(); // 捲動時固定主選單
fatFooter(); // fatFooter是否要展開
tabFunction('.tabSet'); // tab功能
scrollTables('table'); // table捲動功能
// mobileSearch();
tableAddDataAttributes({
  elemClass: '.tableList', // 目標table
  dataName: 'title', // tableList樣式 加上 data-title
});

// 全站字體
fontSize();

// 手風琴功能
accordionFunction({
  accordion: '.accordion',
  openFirst: false, // 預設先展開所有內容，使用無障礙遊走不再有手風琴效果，永遠展開內容(滑鼠點擊正常開合)
  autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
  duration: 200,
  info: {
    open: '展開', // 收合時顯示
    close: '收合', // 展開時顯示
  },
});

// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    parallax: true,
    speed: 5000,
    // effect: 'fade', //淡入
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });
  //首頁跑馬燈
  const marqueeSlider = new Swiper('.marqueeSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    speed: 3000,
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    // 切換點
    pagination: {
      el: '.marqueeSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.marqueeSlider .nextSlider', //自行設定樣式
      prevEl: '.marqueeSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });
  // 棋界動態
  // let newsUpdateBlockItem = document.querySelectorAll('.newsUpdateBlock .swiper-slide');
  // let newsUpdateBlockPagination = [];
  // newsUpdateBlockItem.forEach((item, index) => {
  //   newsUpdateBlockPagination.push(item.dataset.title);
  // });
  const newsUpdateBlock = new Swiper('.newsUpdateBlock .swiper', {
    loop: false,
    speed: 2000,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    // 切換點
    pagination: {
      el: '.newsUpdateBlock .swiperDots',
      bulletElement: 'button',
      type: 'fraction',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${newsUpdateBlockPagination[index]}">${newsUpdateBlockPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.newsUpdateBlock .nextSlider', //自行設定樣式
      prevEl: '.newsUpdateBlock .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 1.15,
      },
      500: {
        slidesPerView: 1.65,
      },
      800: {
        slidesPerView: 2.65,
      },
      1200: {
        slidesPerView: 3.65,
      },
    },
  });
  // 比賽成績
  // let competitionResultsBlockItem = document.querySelectorAll('.competitionResultsBlock .swiper-slide');
  // let competitionResultsBlockPagination = [];
  // competitionResultsBlockItem.forEach((item, index) => {
  //   competitionResultsBlockPagination.push(item.dataset.title);
  // });

  const competitionResultsBlock = new Swiper('.competitionResultsBlock .swiper', {
    loop: false,
    speed: 2000,
    spaceBetween: 50,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },

    // 切換點
    pagination: {
      el: '.competitionResultsBlock .swiperDots',
      bulletElement: 'button',
      type: 'fraction',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${competitionResultsBlockPagination[index]}">${competitionResultsBlockPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.competitionResultsBlock .nextSlider', //自行設定樣式
      prevEl: '.competitionResultsBlock .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
      },
    },
  });

  //廣告輪播
  const adSwiper = new Swiper('.adSlider .swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    speed: 2000,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    // 切換點
    pagination: {
      el: '.adSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .nextSlider', //自行設定樣式
      prevEl: '.adSlider .prevSlider', //自行設定樣式
      disabledClass: '.adSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      },
    },
  });

  //跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .nextSlider', //自行設定樣式
      prevEl: '.marquee .prevSlider', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
  });

  //cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });
})();
// cookie;
document.addEventListener('DOMContentLoaded', function () {
  const cookieBlock = document.querySelector('.cookieblock');
  const agreeBtn = document.querySelector('.cookiebox_btn');
  const closeBtn = document.querySelector('.cookieblock_close-btn');
  const bgOverlay = document.querySelector('.cookieblock_bg');
  const body = document.body;

  // 若 cookieblock 存在，先加上 bodyfixed
  if (cookieBlock) {
    body.classList.add('bodyfixed');
  }

  function closeCookieBlock() {
    if (cookieBlock) {
      cookieBlock.classList.add('hide');
      body.classList.remove('bodyfixed'); // 移除 bodyfixed
      setTimeout(() => {
        cookieBlock.remove(); // 移除 cookieblock 元素
      }, 400); // 時間需與 CSS transition 時間一致
    }
  }

  if (agreeBtn) agreeBtn.addEventListener('click', closeCookieBlock);
  if (closeBtn) closeBtn.addEventListener('click', closeCookieBlock);
  if (bgOverlay) bgOverlay.addEventListener('click', closeCookieBlock);
});
