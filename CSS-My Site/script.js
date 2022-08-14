"use strict";
const myName = document.querySelector("h1");

myName.addEventListener("mouseover", function () {
  myName.style.color = "#3AB0FF";
});

myName.addEventListener("mouseleave", function () {
  myName.style.color = "#ffa500";
});

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
