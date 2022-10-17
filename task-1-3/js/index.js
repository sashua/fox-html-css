const submitBtn = document.querySelector(".js-submit");
const rangeElem = document.querySelector(".js-range-input");
const valueElem = document.querySelector(".js-range-value");

submitBtn.addEventListener("click", (e) => e.preventDefault());
rangeElem.addEventListener(
  "input",
  () => (valueElem.textContent = `${rangeElem.value}k`)
);
