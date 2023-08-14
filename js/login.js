const loginForm = document.getElementById("login-form")
const loginBtn = document.getElementById("login-btn")
const passworrd = document.getElementById("ps")
const usernameValue = document.getElementById("uname")

function checkInputs() {
    usernameValue.style.outline = passworrd.style.outline = "none"

    if(usernameValue.value.trim() === "" && passworrd.value.trim() === "")
    {
        usernameValue.style.outline = "2px solid red"
        passworrd.style.outline = "2px solid red"
        return false
    }
    else if (usernameValue.value.trim() === "" && passworrd.value.trim() !== "") {
        usernameValue.style.outline = "2px solid red"
        return false
    } 
    else if (passworrd.value.trim() === "" && usernameValue.value.trim() !== "") {
        passworrd.style.outline = "2px solid red"
        return false
    } 
    return true;
}

loginBtn.addEventListener("click", (e) => {
    e.preventDefault()

    if (checkInputs()) {
        loginForm.submit()
    }
})
