const formEl = document.querySelector(".login-form");
const inputEmail = document.querySelector(`[name ="email"]`);
const inputPassword = document.querySelector(`[name ="password"]`);


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inputEmail.value || !inputPassword.value) {
        return alert("Oops..Здається ти надав недостатньо інформації :)");
    }
    const user = {
        name: inputEmail.value,
        password : inputPassword.value,
    }
    formEl.reset();
    console.log(user);
});

