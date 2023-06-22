// mobile menu
var icon = document.getElementById("icon");
var nav = document.getElementById("nav");
icon.addEventListener("click", function () {
  nav.classList.toggle("show");
  if (nav.classList.contains("show")) {
    icon.src = "assets/images/close.svg";
  } else {
    icon.src = "assets/images/menu.svg";
  }
});

// testimonial slider
const testimonial = new Swiper(".testimonial-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".testimonial-swiper-pagination",
    clickable: true,
  },
});
