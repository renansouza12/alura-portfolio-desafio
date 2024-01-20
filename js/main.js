gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".introduction",{
    xPercent:300,
    duration:3,
    scrollTrigger:{
      trigger:".introduction",
      start:"top center",
      end:"bottom center",
      scrub:1,
    }
  })

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

  gsap.from(".about_title",{
    opacity:0,
    scrollTrigger:{
      trigger:".about_title",
      start:"center center",
      end:"bottom center",
      scrub:1,
    }
      
  })

  
  gsap.from(".image",{
    opacity:0,
    y:300,
    scrollTrigger:{
      trigger:".about_title",
      start:"center center",
      end:"bottom center",
      scrub:1,

    }
  })

  const text = new SplitType('#target');

   
  gsap.from(".char",{
    stagger:0.2,
    opacity:0,
    scrollTrigger:{
      trigger:".about_paragraph",
      start:"top center",
      end:"center center",
      scrub:1,
    }
  })

  