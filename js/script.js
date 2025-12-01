"use strict";

// ----------------------hero---------------------
const buyButton = document.getElementById("buy-btn");

buyButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("sec-1").offsetTop,
    behavior: "smooth",
  });
});

buyButton.addEventListener("mouseover", () => {
  buyButton.style.backgroundColor = "#884c59";
});

buyButton.addEventListener("mouseout", () => {
  buyButton.style.backgroundColor = "#683f21";
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
// ------------------Footter----------------------
const upButton = document.getElementById("up-btn");

upButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
