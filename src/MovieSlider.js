
let swiper = new Swiper('.movieSliderContainer', {
    effect: 'coverflow',
    direction: 'vertical',
    rewind: true ,
    slideToClickedSlide: true,
    grabCursor: true,
    touchRatio:0.1,
    centeredSlides:false,
    spaceBetween: -210,
    virtualTranslate:true,
    runCallbacksOnInit:true,
    coverflowEffect: {
        rotate: 0,
        modifier:1,
        scale:0.6,
        slideShadows: false
    },
    freeModeSticky:false,
    freeMode:false
});
