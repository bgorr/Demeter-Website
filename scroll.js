gsap.set(".sticky", {yPercent: -100});
let main = document.querySelector(".main-container");

ScrollTrigger.create({
  trigger: ".sticky",
  start: "bottom bottom",
  endTrigger: "footer",
  end: "top bottom",
  pin: true,
  onRefreshInit: self => main.style.paddingBottom = self.trigger.offsetHeight + "px",
  pinSpacing: false
});
gsap.to(".pContent", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});

gsap.to(".pImage", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});
