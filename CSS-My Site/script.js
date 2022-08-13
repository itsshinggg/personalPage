"use strict";


document.querySelector("h1").addEventListener("mouseover", function(){
  console.log("Yes.")
  document.querySelector("h1").style.color = "#3AB0FF";
})

document.querySelector(".linkedin").addEventListener('mouseover', function(){
    document.querySelector(".linkedin").style.width = "7%";
  });

document.querySelector(".linkedin").addEventListener('mouseleave', function(){
  document.querySelector(".linkedin").style.width = "5%";
})

document.querySelector(".github").addEventListener('mouseover', function(){
    document.querySelector(".github").style.width = "7%";
  });

document.querySelector(".github").addEventListener('mouseleave', function(){
  document.querySelector(".github").style.width = "5%";
});


//TODO
  // reduce the repetition
