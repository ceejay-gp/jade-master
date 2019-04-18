/* jshint esversion: 6 */


const images = [
  "url(media/christianna06.jpg)",
  "url(media/christianna01.jpg)",
  "url(media/christianna04.jpg)",
  "url(media/christianna05.jpg)",
  "url(media/christianna08.jpg)",
];

// let currentImage = 0;
// let currentImageText = "";
//
// if (localStorage.getItem("currentImageText") === null) {
//   currentImage = 0;
// } else {
//   localStorage.setItem("currentImageText", currentImageText);
//   parseInt(currentImageText, currentImage);
// }


const headerTag = document.querySelector("header");
let imageCount = images.length;

let randomNumber = Math.floor(imageCount * Math.random());

// This function pull an image from the images array & sets it to the header background. It also increases the image count by 1 to show the next image next time.

const changeImage = function() {

  headerTag.style.backgroundImage = images[randomNumber];

  // this is going to increase the image number. if the current image is > greater than the imageCount - 1, then we want it to be set to 0.

  // if (currentImage > imageCount - 1) {
  //   currentImage = 0;
  //   localStorage.setItem("currentImageText", currentImage);
  //
  // } else {
  //   currentImage = currentImage + 1;
  //   localStorage.setItem("currentImageText", currentImage);
  // }
};

window.onload = changeImage();