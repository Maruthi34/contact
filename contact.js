const form=document.querySelector("form");

const fullname= document.getElementById("name");
const email= document.getElementById("email");
const phone= document.getElementById("phone");
const subject= document.getElementById("subject");
const message= document.getElementById("message");


function sendEmail(){

    const bodyMessage =  ` FullName: ${fullname.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br> message:${message.value}`

Email.send({

    SecureToken : "e5009786-1f22-4824-8cc0-0f500107e0bf",
    To : 'gedalahemanth143@gmail.com',
    From : "gedalahemanth143@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK"){
        Swal.fire({
            title: "Success!",
            text: "Message sent Successfully!",
            icon: "success"
        });
    }else{
        swal.fire({
            title:"Failed!",
            text: "Message senting is Failed!",
            icon: "error"
        })
    }
}
);

}

function checkInputs(){
    const items=document.querySelectorAll(".item");

    for(const item of items){

        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");

        }

        if(items[1].value !=""){
            checkEmail();
        }
        items[1].addEventListener("keyup",() =>{
            checkEmail();
        });


        if(items[2].value !=""){
            checkPhone();
        }


        items[2].addEventListener("keyup",() =>{
            checkPhone();
        });

        item.addEventListener("keyup",() =>{
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail=document.querySelector(".error-txt email");

  if(!email.value.match(emailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if(email.value !=""){
        errorTxtEmail.innerText="Enter a Valid Email Address"
    }
    else{
        errorTxtEmail.innerText="Email Address Can't be Blank "
    }
  }
  else{
    email.parentElement.classList.remove("error");
    email.parentElement.classList.remove("error");


  }

}



function checkPhone(){

    const mobileNumberRegex = /^\d{10}$/;

    const errorTxtPhone=document.querySelector(".error-txt phone");

        if(!phone.value.match(mobileNumberRegex)){
            phone.classList.add("error");
            phone.parentElement.classList.add("error");
            
            if(phone.value !=""){
                errorTxtPhone.innerText="Enter a Valid Phone Number"
            }
            else{
                errorTxtPhone.innerText="Type Correct Mobile Number "
            }

        }
        else{
            phone.parentElement.classList.remove("error");
            phone.parentElement.classList.remove("error");
        
        }
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
 
    checkInputs();

    if(!fullname.classList.contains("error") && !email.classList.contains("error")
       && !subject.classList.contains("error") 
       && !message.classList.contains("error")){
        
        sendEmail();
     
        form.reset();
        return false;

       }
})