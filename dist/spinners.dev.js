"use strict";

var spinner = document.querySelector('.v2');
var fps = (1000 / 60).toFixed(2);
var deg = 0;
var degChange = 6;

var rotate = function rotate() {
  deg += degChange;
  spinner.style.transform = "rotate(".concat(deg, "deg)");
};

setInterval(rotate, fps);
var spinnerRAF = document.querySelector('.v3');
var degRAF = 0;
var degChangeRAF = 6;

var rotateRAF = function rotateRAF() {
  degRAF += degChangeRAF;
  spinnerRAF.style.transform = "rotate(".concat(degRAF, "deg)");
  requestAnimationFrame(rotateRAF);
};

rotateRAF();
var spinnerRAF2 = document.querySelector('.v4');
var degRAF2 = 0;
var degChangeRAF2 = 6;
var time = performance.now();

var rotateRAF2 = function rotateRAF2(currentT) {
  if (currentT - time > 16) {
    time = currentT;
    degRAF2 += degChangeRAF2;
    spinnerRAF2.style.transform = "rotate(".concat(degRAF2, "deg)");
  }

  requestAnimationFrame(rotateRAF2);
};

rotateRAF2();