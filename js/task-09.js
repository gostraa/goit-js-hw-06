function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const updateText = document.querySelector(".color");
const updateBtn = document.querySelector(".change-color");


updateBtn.addEventListener("click", () => {
  updateText.textContent = getRandomHexColor();
  document.body.style.background = updateText.textContent;
});

