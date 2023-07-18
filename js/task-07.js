const inputElem = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

 console.log(inputElem);


 inputElem.addEventListener("input", () => {
   
    output.style.fontSize = `${inputElem.value}px`
});
