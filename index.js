

gsap.registerPlugin(ScrollTrigger);

document.getElementById("workButton").addEventListener("click", function () {
  console.log("show me the work!");
  gsap.to(window, {
    duration: 1,
    ease: Expo.easeOut,
    scrollTo: { y: ".works", offsetY: 12 }
  });
});
document.getElementById("aboutButton").addEventListener("click", function () {
    console.log("show me the about!");
    gsap.to(window, {
      duration: 1,
      ease: Expo.easeOut,
      scrollTo: { y: ".about", offsetY: 12 }
    });
  });
  

document.getElementById("scrollTop").addEventListener("click", function () {
  console.log("Back to top PLS");
  gsap.to(window, {
    duration: 1,
    ease: Expo.easeOut,
    scrollTo: { y: ".banner", offsetY: 70 }
  });
});



var timeline = gsap.timeline();
gsap.from("#scrollTop", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".works",
    scrub: true,
     markers: false,
    start: "top center",
    end: "top top"
  }
});
