
gsap.fromTo(".nav", {y: -100}, {y: 0, delay: 1.5})
gsap.fromTo(".nav_selected", {backgroundPosition: "0px -50px"}, {backgroundPosition: "0px 0px", delay: 2})
let selectedNav = $(".nav_selected>a")
gsap.to(selectedNav, {color: "#FDCB00", delay: 2})


gsap.fromTo(".eclipse_02", {
    maskPosition: "-50px 100px",
}, {
    maskPosition: "-1000px 1000px",
    duration: 10,
})
gsap.fromTo(".eclipse_01", {
    maskPosition: "600px 600px",
}, {
    maskPosition: "-50px 100px",
    duration: 6,
})

$(".eclipse_02").addClass("mask")
$(".eclipse_01").addClass("mask")

gsap.fromTo(".bottomIcon", {
    opacity: 0,
}, {
    opacity: 1,
    duration: 2,
    delay: 2
})

gsap.to(".eclipse_parent", {opacity: 1, duration: 0.1})
gsap.to(".eclipse_parent", {
    scale: 1,
    duration: 2,
    delay: 0.4,
    ease: "sine"
})

gsap.to(".firstSlideRightIcon", {scale: 1, delay: 3})
gsap.to(".Polygon06", {x: 25, delay: 3.2})

gsap.fromTo(".firstSlideRightText", {opacity: 0, x: 50}, {opacity: 1, x: 0, delay: 3.4})

gsap.to(".firstSlideBottomShadow", {opacity: 0.2, delay: 2})
gsap.to(".eclipse_01", {
    keyframes: {
        clipPath: ["ellipse(0% 0% at 100% 100%)", "ellipse(100% 100% at 60% 62%)"]
    },
    duration: 2
})

gsap.to(".eclipse_03", {
    keyframes: {
        clipPath: ["ellipse(0% 0% at 100% 100%)", "ellipse(100% 100% at 60% 62%)"]
    },
    duration: 2,
    delay: 1
})

//-------------------------

gsap.to(".eclipse_02", {
    keyframes: {
        clipPath: ["ellipse(0% 0% at 100% 0%)", "ellipse(100% 100% at 52% 42%)"]
    },
    duration: 2,
    delay: 0.5
})

gsap.to(".eclipse_04", {
    keyframes: {
        clipPath: [" ellipse(0% 0% at 100% 0%)", "ellipse(100% 100% at 52% 42%)"]
    },
    duration: 2,
    delay: 1
})

//-----------------------

gsap.to(".firstSlideCenterImage", {opacity: 1, delay: 2.5})
gsap.to(".firstSlideCenterImage", {y: -340, delay: 2.5, ease: "circ"})

gsap.to(".center_text", {opacity: 1, delay: 2.5})
gsap.to(".center_text", {y: 15, delay: 2.5, ease: "circ"})


gsap.to(".fe_img", {opacity: 1, delay: 2.5})
gsap.to(".fe_img", {y: 10, delay: 2.5, ease: "circ"})

//----------------------

gsap.to(".circle01", {scale: 1, delay: 2.3, duration: 0.4});

let circle02 = gsap.timeline()
circle02.to(".circle02", {scale: 1, delay: 2.5, duration: 0.5})
    .to(".circle02", {scale: 1.2, ease: "sine.inOut", repeat: 100, yoyo: true});

let circle03 = gsap.timeline()
circle03.to(".circle03", {scale: 1, delay: 2.7, duration: 0.5})
    .to(".circle03", {scale: 1.3, duration: 0.7, ease: "sine.inOut", repeat: 100, yoyo: true});

let circle04 = gsap.timeline()
circle04.to(".circle04", {scale: 1, delay: 2.5, duration: 0.5})
    .to(".circle04", {scale: 1.3, duration: 0.7, ease: "sine.inOut", repeat: 100, yoyo: true});


// ---------------------

gsap.fromTo(".firstSlideTextHeader", {y: -10, opacity: 0}, {y: 0, opacity: 1, delay: 2.2, ease: "power3.in"})
gsap.fromTo(".firstSlideTextParagraph", {y: -15}, {opacity: 1, y: 0, delay: 2.5, ease: "power3.in"})
gsap.to(".firstSlideTextButton", {scale: 1, delay: 3, duration: 1, ease: "elastic"})

gsap.to(".eclipse_01", {opacity: 0, delay: 3, duration: 0})
gsap.to(".eclipse_02", {opacity: 0, delay: 3})

//----------------------
gsap.to(".eclipse_parent", {keyframes: {scaleX: [1, -1, 1]}, delay: 3, duration: 1, ease: "circ.inOut"})


$(".firstSlideRightIcon").on("click", () => {

    gsap.to(".bottomIcon", {opacity: 0})
    gsap.to(".secondSlideTopEffect", {opacity: 0.3, delay: 3})
    gsap.to(".firstSlideBottomShadow", {opacity: 0, delay: 0})

    gsap.to(".eclipse_01", {opacity: 0, duration: 0})
    gsap.to(".eclipse_02", {opacity: 0, duration: 0})

    gsap.to(".firstSlideRightTextParent", {opacity: 0})
    $(".transition_circle01").addClass("display_block")
    $(".transition_circle02").addClass("display_block")

    gsap.to(".transition_circle01", {opacity: 0.8, duration: 0.1});
    gsap.to(".transition_circle01", {scale: 0, duration: 1, ease: "expo"});

    gsap.to(".firstSlideCenterImages", {
        keyframes: {
            clipPath: ["circle(0.0% at 50% 50%)", "circle(0.0% at 50% 50%)"],
            delay: 0.4,
            duration: 2
        },
        duration: 0.8
    })

    gsap.to(".circle04", {borderColor: "#F4E641", delay: 2})
    gsap.to(".transition_circle02", {opacity: 0.8, duration: 0.1, delay: 0.2})
    gsap.to(".transition_circle02", {scale: 0, duration: 1, delay: 0.2, ease: "expo"})

    gsap.to(".eclipse_03", {rotate: -44, delay: 0.6})
    gsap.to(".firstSlideTextBox", {opacity: 0, duration: 1})

    gsap.to(".eclipse_04", {rotate: 46, delay: 0.6})

    gsap.to(".eclipse_03", {opacity: 0, duration: 0.01, delay: 1})
    gsap.to(".eclipse_04", {opacity: 0, duration: 0.01, delay: 1})
    gsap.to(".eclipse_05", {opacity: 1, delay: 0.99, duration: 0.01})
    gsap.to(".eclipse_05", {scaleX: 50, duration: 10, delay: 1.2})
    gsap.to(".eclipse_05", {
        keyframes: {
            clipPath: [
                "polygon(0% 0%, 0% 100%, 49.5% 100%, 49.5% 0, 50.5% 0, 50.5% 100%, 100% 100%, 100% 0%)",
                "polygon(0% 0%, 0% 100%, 25% 100%, 25% 0, 78% 0, 79% 100%, 100% 100%, 100% 0%)",
                "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0, 100% 0, 100% 100%, 100% 100%, 100% 0%)"],
        },
        delay: 1.5,
        duration: 0.7
    })

    gsap.to(".SecondBackgroundImage", {scale: 10})

    setTimeout(() => {
        $(".firstSlideTextParagraph,.firstSlideTextHeader, .firstSlideTextButton").hide()
        $(".SecondBackgroundImage").addClass("display_block")
    }, 1000)

    gsap.to(".secondSlideTextHeader", {opacity: 1, delay: 3.2, duration: 0.3})
    gsap.fromTo(".secondSlideTextHeader", {y: -10}, {y: 0, delay: 3.2, ease: "power3.in"})
    gsap.fromTo(".secondSlideTextParagraph", {y: -20}, {opacity: 1, y: 0, delay: 3.5, ease: "power3.in"})
    gsap.to(".secondSlideTextButton", {scale: 1, delay: 4, duration: 1, ease: "elastic"})

    gsap.to(".SecondBackgroundImage", {scale: 1, duration: 0.5, ease: "sine", delay: 1.8})
    gsap.to(".SecondBackgroundImage", {opacity: 1, delay: 1.8})

    gsap.fromTo(".secondSlideButtonsParent", {opacity: 0}, {opacity: 1, duration: 0.5, delay: 4})
    gsap.fromTo(".button01", {scale: 0}, {scale: 1, ease: "elastic", delay: 4, duration: 2})
    gsap.fromTo(".button02", {scale: 0}, {scale: 1, ease: "elastic", delay: 4.25, duration: 2})
    gsap.fromTo(".button03", {scale: 0}, {scale: 1, ease: "elastic", delay: 4.5, duration: 2})


    gsap.fromTo(".secondSlideRightBottomTextHeader", {y: 10}, {y: 0, opacity: 1, delay: 4})
    gsap.to(".secondSlideRightBottomLine", {
        keyframes: {clipPath: ["polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)", "polygon(0.2% 0, 100% 0, 100% 100%, 0.2% 100%)", " polygon(0 0, 100% 0, 100% 100%, 0 100%)"]},
        delay: 4
    })

    gsap.to(".secondSlideRightTextParent", {opacity: 1, delay: 4.2})
    gsap.fromTo(".secondSlideTextHeader", {x: 40, opacity: 0}, {x: 0, opacity: 1, delay: 4.5, ease: "circ.out"})

    gsap.fromTo(".BICEPS01", {opacity: 0}, {opacity: 1, delay: 4.5})
    gsap.fromTo(".BICEPS02", {opacity: 0}, {opacity: 0.6, delay: 4.8})
    gsap.fromTo(".BICEPS03", {opacity: 0}, {opacity: 0.3, delay: 5})

    gsap.fromTo(".button01_num", {y: -50}, {y: 0, delay: 4.2, duration: 1.5, ease: "elastic.out"})
    gsap.fromTo(".button02_num", {y: -40}, {y: 0, delay: 4.45, duration: 1.5, ease: "elastic.out"})
    gsap.fromTo(".button03_num", {y: -30}, {y: 0, delay: 4.65, duration: 1.5, ease: "elastic.out"})

    setTimeout(()=>{
        $(".movieSliderContainer").removeClass("displayNone")
    },0)

    let movieElementChildren = $('.swiper-slide')
    let stepNum = 0;

    for (let num = movieElementChildren.length - 1; num >= 0; num--) {
        gsap.to(movieElementChildren[stepNum], {
            keyframes: {clipPath: ["polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", "polygon(0 0.01%, 100% 0.01%, 100% 100%, 0% 100%)", "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"]},
            delay: (num * 0.4 + 4),
            ease: "back.inOut",
            duration: 1.5
        })
        gsap.fromTo(movieElementChildren[stepNum].children[1], {scale: 2}, {
            scale: 1,
            delay: ( num * 0.2 + 4.8),
            ease: "expo.out",
            duration: 1
        })
        stepNum++;
    }


})

