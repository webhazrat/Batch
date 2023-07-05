// variable identifier
// data type - number, string, boolean, object, array

// number
var a = 12;

// string
var b = "jsdkjfkdjfk";

// boolean
var c = true;

// object
var abc = {
  a: 12,
  b: "hsjdhfja",
  c: 10,
  d: {
    a: "da",
    b: "sdfds",
  },
  f: function () {
    return "F Function";
  },
};
// abc.d.a

// array
var abcArray = [12, "hsjdhfjsdh", 10, "hsjdfhjdsh"];
// abcArray[0]

abc.a = 100;

console.log(typeof abc.f);

// 21/06/2023 - DOM Manipulation
var header = document.getElementById("header");

header.innerHTML = "<span>React</span>";

header.classList.add("test");
header.classList.remove("another");
header.classList.replace("test", "another2");

console.log(header.classList.contains("test"));

header.setAttribute("title", "A another title");

console.log(header.getAttribute("title"));

header.addEventListener("click", function () {
  // header.classList.toggle("toggle");
  alert("Hi");
});

document.getElementById("clickHere").addEventListener("click", function () {
  if (confirm("Are you sure to remove H1")) {
    header.remove();
  }
});

var span = document.createElement("span");
span.innerText = "New Element";

header.insertAdjacentElement("beforebegin", span);
