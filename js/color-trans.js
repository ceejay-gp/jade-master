/*jshint esversion: 6 */


const bodyTag = document.querySelector("body");


// We want to change the background colour of sections as they reach 50% from the top of the Page
// First we need to get all of the sections we want to use



document.addEventListener("scroll", function() {


  // Find out how far the scrollbar is from the top of the page
  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  // Find out how far from the top of the page the first section is

  let sectionOneDistance = $(".one-five-two-oh-section-one").offset().top;
  console.log("This is the section one distance" + sectionOneDistance);


  // If the distance from top is greater than the section distance from top divided by two... ie we want the colour to fade in before the section comes into view
  if (distanceFromTop > (sectionOneDistance / 2)) {

    console.log("section one triggered");
    bodyTag.classList.add("one-five-two-oh-section-one-active");

  } else {

    bodyTag.classList.remove("one-five-two-oh-section-one-active");
  }


  let sectionTwoDistance = $(".last-studio").offset().top;
  console.log("This is the section two distance" + sectionTwoDistance);

  if (distanceFromTop > (sectionTwoDistance - (sectionTwoDistance / 15))) {

    bodyTag.classList.add("last-studio-active");

  } else {

    bodyTag.classList.remove("last-studio-active");
  }


  let sectionThreeDistance = $(".granular").offset().top;
  console.log("This is the section three distance" + sectionThreeDistance);

  if (distanceFromTop > (sectionThreeDistance - (sectionThreeDistance / 20))) {


    bodyTag.classList.add("granular-active");

  } else {


    bodyTag.classList.remove("granular-active");
  }

  let sectionFourDistance = $(".spray").offset().top;
  console.log("This is the section four distance" + sectionFourDistance);

  if (distanceFromTop > (sectionFourDistance - (sectionFourDistance / 30))) {


    bodyTag.classList.add("spray-active");

  } else {


    bodyTag.classList.remove("spray-active");
  }

  let sectionFiveDistance = $(".munch").offset().top;
  console.log("This is the section five distance" + sectionFiveDistance);

  if (distanceFromTop > (sectionFiveDistance - (sectionFiveDistance / 30))) {


    bodyTag.classList.add("munch-active");

  } else {


    bodyTag.classList.remove("munch-active");
  }

});
