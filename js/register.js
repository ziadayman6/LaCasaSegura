const firrstnameValue = document.getElementById("fn")
const lastnameValue = document.getElementById("ln")
const ageValue = document.getElementById("ag")
const emailValue = document.getElementById("em")
const usernameValue = document.getElementById("un")
const passwordValue = document.getElementById("ps")
const cpasswordValue = document.getElementById("cp")
const regBtn = document.getElementById("reg-btn")
const regForm = document.getElementById("reg-form")


function checkInputs() {
    const checkbox = document.getElementById("cb")
    usernameValue.style.outline = passwordValue.style.outline = firrstnameValue.style.outline = checkbox.style.outline = "none"
    ageValue.style.outline = emailValue.style.outline = lastnameValue.style.outline = cpasswordValue.style.outline = "none"

    const arr = [firrstnameValue,lastnameValue,ageValue,emailValue,usernameValue,passwordValue,cpasswordValue]

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].value.trim() === ""){
            arr[i].style.outline = "2px solid red"
        }
    }

    if(!(checkbox.checked)){
        checkbox.style.outline = "2px solid red"
    }

    for (let j = 0; j < arr.length; j++) {
        if(arr[j].style.outline == "2px solid red" || !(checkbox.checked))
            return false
    }
    return true
}

function validation(){
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    const emailresult = emailregex.test(emailValue.value)
    const passwordresult = passwordregex.test(passwordValue.value)
    if(ageValue.value < 16 || ageValue.value > 100)
    {
        alert("Your age should be more than 16 years and less than 100 years")
        ageValue.style.outline = "2px solid red"
        return false
    }
    if(emailresult === false)
    {
        alert("Please enter valid email")
        emailValue.style.outline = "2px solid red"
        return false
    }
    if(passwordresult === false)
    {
        alert("Please enter valid password, password should contain at least one number and one special character and one upper case character and must be eight characters or longer.")
        passwordValue.style.outline = "2px solid red"
        return false
    }
    if(cpasswordValue.value != passwordValue.value){
        alert("Please enter confirm password field like passsword field")
        cpasswordValue.style.outline = "2px solid red"
        return false
    }
    return true
}

regBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (checkInputs() && validation()) {
        regForm.submit()
    }
})
