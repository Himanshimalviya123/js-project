let swiper=new Swiper(".swiper",{
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev"
    },
    autoplay:{
        delay:2000,
    }
})
// =========================sing page html===========================
let abc=new Swiper("#ani",{
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev"
    },
    autoplay:{
        delay:2000,
    }
})
// ======================================
var swiper1 = new Swiper(".swiper1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    //   rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });