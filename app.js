$(document).ready(function () {
  $(".about-nav").click(function (event) {
    $("#portfolio").addClass("d-none");
    $("#about").removeClass("d-none");
  });

  $(".portfolio-nav").click(function (event) {
    $("#about").addClass("d-none");
    $("#portfolio").removeClass("d-none");
  });
});
