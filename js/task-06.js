const inputEl = document.querySelector("#validation-input");


inputEl.addEventListener("blur", (event) => {
    const inputValue = event.currentTarget;
    if (inputValue.value.length >= 6) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
})