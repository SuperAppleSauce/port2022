

gsap.registerPlugin(ScrollTrigger);


document.getElementById("scrollTop").addEventListener("click", function () {
  console.log("Back to top PLS");
  gsap.to(window, {
    duration: 1,
    ease: Expo.easeOut,
    scrollTo: { y: ".jello", offsetY: 70 }
  });
});



var timeline = gsap.timeline();
gsap.from("#scrollTop", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "h2",
    scrub: true,
     markers: false,
    start: "bottom 100",
    end: "top"
  }
});

