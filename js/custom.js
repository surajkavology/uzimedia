$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $("body").addClass("toggle");
    });
});

$(document).ready(function(){
    $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
    });
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});