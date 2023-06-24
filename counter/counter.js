class Counter {
  selector;
  speed;
  constructor(selector, speed = 1) {
    if (!selector) {
      console.log("Please add selector");
      return;
    }
    this.selector = selector;
    this.speed = speed;
    this.counter();
  }

  counter() {
    const counters = document.querySelectorAll(this.selector);
    counters.forEach((item) => {
      let startValue = 0;
      let endValue = parseInt(item.getAttribute("data-target"));

      let counter = setInterval(() => {
        startValue += 1;

        item.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, this.speed);
    });
  }
}
