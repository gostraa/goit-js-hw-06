function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const input = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const container = document.querySelector("#boxes");


createBtn.addEventListener("click", () => {
  
  createBoxes(input.value);

});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(number) {
  const newArr = [];
  for (let i = 0; i < number; i += 1) {
    
    const newDiv = `<div style = "width:${30 + 10 * i + "px"};
     height: ${30 + 10 * i + "px"}; 
     background-color: ${getRandomHexColor()}"></div>`
    newArr.push(newDiv);


    // const newDiv = document.createElement("div");
    // newDiv.style.width = 30 + 10 * i + "px";
    // newDiv.style.height = 30 + 10 * i + "px";
    // newDiv.style.backgroundColor = getRandomHexColor();
    // container.insertAdjacentElement("beforeend",newDiv);
    
  }
  
  container.insertAdjacentHTML("beforeend",newArr.join(""))
}

function destroyBoxes() {
 
 container.innerHTML = "";
  
}