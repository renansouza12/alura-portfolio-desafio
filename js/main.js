gsap.registerPlugin(ScrollTrigger);


gsap.to(".introduction",{
  clipPath:"circle(80%)",
  ease:"circ.in",
  scrollTrigger:{
    trigger:".introduction",
    start:"top center",
    end:"bottom center",
    scrub:1,
  }
})

gsap.from(".about_title", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".about_title",
    start: "center center",
    end: "bottom center",
    scrub: 1,
  }

})


gsap.from(".image", {
  opacity: 0,
  y: 300,
  scrollTrigger: {
    trigger: ".about_title",
    start: "center center",
    end: "bottom center",
    scrub: 1,

  }
})

gsap.from(".cv_title", {
  opacity: 0,
  y: 300,
  scrollTrigger: {
    trigger: ".cv_title",
    start: "top center",
    end: "center center",
    scrub: 1,

  }
})
gsap.from(".cv_content", {
  opacity:0,
  stagger:0.4,
  scrollTrigger: {
    trigger: ".cv_content",
    start: "top center",
    end: "bottom center",
    scrub: 1,

  }
})



const text = new SplitType('#target');


gsap.from(".char", {
  stagger: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about_paragraph",
    start: "top center",
    end: "center center",
    scrub: 1,
  }
})

