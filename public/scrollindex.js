gsap.registerPlugin(CSSPlugin)

var requestId = null;
gsap.registerPlugin(ScrollTrigger);

function getImageIndex(v){
  v++;
  v = v.toString().padStart(4, '0');
  return v;
}

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#image-sequence",
      pin: false,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "bottom", // end after scrolling 500px beyond the start
      scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
	  snap: {
        snapTo:"labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      }

    }
  });

// add animations and labels to the timeline
for(var i=0; i<10; i++){
	var imgIndex = getImageIndex(i);
	var imgUrl = 'url(spin/JPEG/spin_'+imgIndex+'.jpg)';
	console.log(imgUrl);
	tl.addLabel('img'+imgIndex);
	tl.to( '#image-sequence' , {css: {backgroundImage: imgUrl}});
}
var progress = tl.progress(); 

console.log(progress);