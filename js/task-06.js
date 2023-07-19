const inputEl = document.querySelector("#validation-input");
const dataSet = Number(inputEl.dataset.length);


inputEl.addEventListener("blur", (event) => {
    const inputValue = event.currentTarget;
     
    if (inputValue.value.length === dataSet) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
})