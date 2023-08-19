const radio1 = document.getElementById('op1')
const radio2 = document.getElementById('op2')
const hide = document.getElementById('hide')
const imagee = document.getElementById('imggg')
// inputs
const cardnum = document.getElementById('inp1')
const cardname = document.getElementById('inp2')
const month = document.getElementById('inp3')
const year = document.getElementById('inp4')
const cvv = document.getElementById('inp5')
const phone = document.getElementById('inp6')
const address = document.getElementById('inp7')

radio2.checked = true;

function choosedradio()
{
    if(radio1.checked){
        imagee.innerHTML = "<img src=\'../imgs/cash .png\' alt=\'\'>"
        hide.style.display = "none"
    }
    if(radio2.checked){
        imagee.innerHTML = "<img src=\'image/credit.png\' alt=\'\'>"
        hide.style.display = "block"
    }
}

function checkinputs()
{
    cardname.style.outline = cardnum.style.outline = month.style.outline = year.style.outline = "none"
    cvv.style.outline = phone.style.outline = address.style.outline = "none"

    const arr = [cardname,cardnum,month,year,cvv,phone,address]
    
    if(radio2.checked)
    {
        for (let i = 0; i< arr.length; i++) {
            if(arr[i].value.trim() === ""){
                arr[i].style.outline = "2px solid red"
            }
        }
    }
    else if(radio1.checked)
    {
        for (let i = 5; i< arr.length; i++) {
            if(arr[i].value.trim() === ""){
                arr[i].style.outline = "2px solid red"
            }
        }
    }
    return true
}

function validate(){
    cardname.style.outline = cardnum.style.outline = month.style.outline = year.style.outline = "none"
    cvv.style.outline = phone.style.outline = address.style.outline = "none"
    
    const cardnumberregex = /^[0-9]{16}$/
    const cardnameregex = /^[a-zA-Z\s-]{1,50}$/
    const cvvregex = /^[0-9]{3}$/
    const phoneregex = /^(?:\+20|0)1[0125][0-9]{8}$/
    const addressregex = /^[a-zA-Z0-9\s-]{0,100}$/
    const addressresult = addressregex.test(address.value)
    const phoneresult = phoneregex.test(phone.value)
    const cardnameresult = cardnameregex.test(cardname.value)
    const cardnumberresult = cardnumberregex.test(cardnum.value)
    const cvvresult = cvvregex.test(cvv.value)
    if(radio2.checked)
    {
        if(cardnumberresult === false)
        {
            alert("Please enter a valid card number")
            cardnum.style.outline = "2px solid red"
            return false
        }
        if(cardnameresult === false)
        {
            alert("Please enter a valid card holder name")
            cardname.style.outline = "2px solid red"
            return false
        }
        if(month.value === "" || month.value > 12)
        {
            alert("Please enter a valid month")
            month.style.outline = "2px solid red"
            return false
        }
        if(year.value < 2023)
        {
            alert("Please enter a valid year")
            year.style.outline = "2px solid red"
            return false
        }
        if(cvvresult === false)
        {
            alert("Please enter a valid CVV")
            cvv.style.outline = "2px solid red"
            return false;
        }
        if(phoneresult === false)
        {
            alert("Please enter a valid phone number")
            phone.style.outline = "2px solid red"
            return false
        }
        if(addressresult === false || address.value === "")
        {
            alert("Please enter a valid address")
            address.style.outline = "2px solid red"
            return false
        }
        return true    
    }
    if(radio1.checked)
    {
        if(phoneresult === false)
        {
            alert("Please enter a valid phone number")
            return false
        }
        if(addressresult === false || address.value === "")
        {
            alert("Please enter a valid address")
            return false
        }
        return true    
    }
}

const radios = document.querySelectorAll('input[type="radio"]')
radios.forEach(radio => {
    radio.addEventListener('click',choosedradio)
})
const Form = document.getElementById('frm')
const btn = document.getElementById('sub')
btn.addEventListener("click", (e) => {
    e.preventDefault()

    if (checkinputs() && validate()) {
        confirm("Payment successful, press ok to redirect you to home page.")
        Form.submit()
    }
})
