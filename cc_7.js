const input = document.querySelector("#headlineInput");
const button = document.querySelector("#updateBtn");
const cta = document.querySelector("#cta");

button.addEventListener("click", function () {
  cta.textContent = input.value;
});