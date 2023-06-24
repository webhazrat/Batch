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
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    557: {
      slidesPerView: 1,
    },
  },
});

// branching (if, switch), looping

var day = "Sunday";

if (
  day === "Sunday" ||
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday"
) {
  console.log("Working Day");
} else if (day === "Saturday" || day === "Friday") {
  console.log("Holi Day");
} else {
  console.log("You have added wrong");
}

var nums = [12, 10, 78, 8, 10, 62, 22];

// for(initial; limit; increment/decrement)
var total = 0;
for (var i = 0; i < nums.length; i++) {
  total = total + nums[i];
}
console.log(total);
