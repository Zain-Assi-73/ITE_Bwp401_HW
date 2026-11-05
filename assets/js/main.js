const form = document.getElementById("contact")
const Name = document.getElementById("name")
const Phone = document.getElementById("phone")
const Email = document.getElementById("email")
const Message = document.getElementById("message")
const AlertB=document.getElementById("alertbox")
const ErrorEl=document.getElementById("error")

form.addEventListener('submit' , function(e) {
       e.preventDefault();
    if(isNaN(Phone.value)){
ErrorEl.textContent="Phone cant be a text  "

    }else if (Name.value && Phone.value && Email.value && Message.value !==''){
AlertB.textContent="تم ارسال رسالتك بنجاح"
ErrorEl.textContent=""
  
    }

})
