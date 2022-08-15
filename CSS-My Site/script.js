"use strict";

// name color change
const myName = document.querySelector("h1");

myName.addEventListener("mouseover", function () {
  myName.style.color = "#3AB0FF";
});

myName.addEventListener("mouseleave", function () {
  myName.style.color = "#ffa500";
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// resume pop up
document.querySelector(".resume-button").addEventListener("click", function () {
  console.log("clicked!");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// resume close
document.querySelector(".close-modal").addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// contact logo size change
const logos = document.querySelectorAll(".logo");

for (let i = 0; i < logos.length; i++)
  logos[i].addEventListener("mouseover", function () {
    logos[i].classList.add("scale-up");
  });

for (let i = 0; i < logos.length; i++)
  logos[i].addEventListener("mouseleave", function () {
    logos[i].classList.remove("scale-up");
  });

//TODO
// Resume button = learn positioning better
// overlay
