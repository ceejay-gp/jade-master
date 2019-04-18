/* jshint esversion: 6 */

$('.text-typer .letters').each(function() {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({
    loop: false
  })
  .add({
    targets: '.text-typer .line',
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.text-typer .line',
    translateX: [0, $(".text-typer .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.text-typer .letter',
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 50 * (i + 1);
    }
  }).add({
    targets: '.text-typer',
    opacity: 1,
    duration: 100,
    easing: "easeOutExpo",
    delay: 1
  }).add({
    targets: '.text-typer .line',
    opacity: 0,
    duration: 1
  });

//P R O J E C T S   T Y P E