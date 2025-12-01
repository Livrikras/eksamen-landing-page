"use strict";

// ----------------------hero---------------------
const buyButton = document.getElementById("buy-btn");

buyButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("sec-1").offsetTop,
    behavior: "smooth",
  });
});

// -----------------------------------------------
// ------------------sec1-------------------------
const greenSpeaker = document.getElementById("g-speaker");

greenSpeaker.addEventListener("mouseover", function() {
  this.classList.add("scale");
});

greenSpeaker.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});


const purpleSpeaker = document.getElementById("p-speaker");

purpleSpeaker.addEventListener("mouseover", function () {
  this.classList.add("scale");
});

purpleSpeaker.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});


const whiteSpeaker = document.getElementById("w-speaker");

whiteSpeaker.addEventListener("mouseover", function () {
  this.classList.add("scale");
});

whiteSpeaker.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});


const rosaSpeaker = document.getElementById("r-speaker");

rosaSpeaker.addEventListener("mouseover", function () {
  this.classList.add("scale");
});

rosaSpeaker.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});


// -----------------------------------------------
// ------------------sec-3------------------------

// const section3 = document.getElementById("sec-3");

// // Window tager fat om browservinduet og gør noget ved
// window.onscroll = () => {
//   section3.forEach((sec) => {
//     // Får nuværende scrollposition
//     let scrollDistance = window.scrollY;

//     // Får sektionens position ift. toppen af dokumentet
//     let secDistance = sec.offsetTop;

//     // Hvis sektionen er kommet ind i synsfeltet, så tilføjes "show animate", eller fjernes den
//     if (scrollDistance >= secDistance) {
//       sec.classList.add("move");
//     } else {
//       sec.classList.remove("move");
//     }
//   });
// };


// -----------------------------------------------
// ------------------Footter----------------------
const upButton = document.getElementById("up-btn");

upButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
