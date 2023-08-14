function showhide()
{
    const eyeshow = document.getElementById("eye")
    const pass = document.getElementById("ps")
    if(pass.type === "password")
    {
        pass.type = "text"
        eyeshow.classList.remove("fa-eye")
        eyeshow.classList.add("fa-eye-slash")
    }
    else{
        pass.type = "password"
        eyeshow.classList.remove("fa-eye-slash")
        eyeshow.classList.add("fa-eye")
    }
}

function showhide2()
{
    const eyeshow2 = document.getElementById("eye2")
    const pass2 = document.getElementById("cp")
    if(pass2.type === "password")
    {
        pass2.type = "text"
        eyeshow2.classList.remove("fa-eye")
        eyeshow2.classList.add("fa-eye-slash")
    }
    else{
        pass2.type = "password"
        eyeshow2.classList.remove("fa-eye-slash")
        eyeshow2.classList.add("fa-eye")
    }
}