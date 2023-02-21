// console.log("test");

/* ------------alt der skal defineres-------------- */
const track = document.querySelector(".carousel_track");
// her henter den "track" fra HTML så vi kan lave ne variabel ud fra den

const slides = Array.from(track.children);
//definer slides => får info med array og vi henter "tracks" børn/"children" til deres parent hvilket i denne case er track containteren.
// -----> making an array => grouping all the 4 things together

/* console.log(track); */
//tjek at vi har access til DOM

/* console.log(slides); */
//array tjek => gruperet alle 4 sammen

const nextButton = document.querySelector(".carousel_btn--right");
const prevButton = document.querySelector(".carousel_btn--left");
//henter left & right buttons til slides

const dotsNav = document.querySelector(".carousel_nav");
//henter alle "dot" buttons til slided

const dots = Array.from(dotsNav.children);
//hente individuelle dots ---> når man klikker på dem individuelt

// const slideSize = slides[0].getBoundingClientRect();
//want to get the size of one of the slides

//console.log(slideSize);
//log tjek => giver x & y cordinates, height etc ---> viser størelsen af givende slides relativ til hvor stor dit vindue er.

// const slideWidth = slideSize.width;
//
// console.log(slideWidth);
//tjekke om den henter og viser width af slider containteren

const slideWidth = slides[0].getBoundingClientRect().width;
// -------> linje 27-35 => man kan "simplify the string" ved at samle det til en const i stedet for 2 ved siden af dens function.
console.log(slideWidth);
//tjekke igen om den henter samme width data.

/* -------------------------------------------------- */

// ---------- arranger slides vedsiden af hinanden ----------
/* slides[0].style.left = slideWidth * 0 + "px";
slides[1].style.left = slideWidth * 1 + "px";
slides[2].style.left = slideWidth * 2 + "px";
slides[3].style.left = slideWidth * 3 + "px"; */

/* I stedet for det øvrige eksempel på at stætte vores slides vedsiden af hinanden (siden de er stacket on top of each other via. styling) så kan vi prøve og "loope" den så det vil være nemmere at opdatere slided i fremtiden (hvis der fx skal indsættes flere slides) */

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
//vi definere variblen ^^^ så vores forEach kan hente vores defineret function i stedet for en "anonymous one"

/* slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
}); */
// anonymous ^

slides.forEach(setSlidePosition);
// dette loop erstatter hele opsætning af den manuelle indtastning fra linje: 46-49.
//vi kan tiløje så mange slides som vi vil med denne kode uden af skulle skrive en ny linje kode for hvert nye slide der er tilføjet :D
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};
/* --------------------------------------------------------------- */

//-------- når jeg klikker left, rykker slide left/venstre --------
/* prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
}); */

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

//-------- når jeg klikker right. rykker slide right/højre --------
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  //console.log(currentSlide.nextElementSibling);
  //tjekke om den henter dom fra defineret const + vi kan hente sibling

  // ------------------- const amountToMove = nextSlide.style.left;
  //   console.log(amountToMove);
  //tjekke hvor meget den vil flytte sig

  // ----- move the  the next  slide
  /*  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide"); 
   ------- i stedet for alt dette ⤵️*/
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// -------- når jeg klikker nav indicators, rykker den til det givende slide
dotsNav.addEventListener("click", (e) => {
  //what indicator was clicked on?
  const targetDot = e.target.closest("button");

  //   console.log("test1");
  if (!targetDot) return;
  //   console.log("test2");

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  //   console.log(targetIndex);
  //tjekker Arrays' numrene 0,1,2,3 når man klikker på "dots under slides
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  updateDots(currentDot, targetDot);

  hideShowArrows(slides, prevButton, nextButton, targetIndex);

  /*  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }} */
  /* vi kan genbruge dens funktionalitet   ^^^ */
});
