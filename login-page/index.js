function me(){
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;

    if(Email == "nelsonadekalu@gmail.com" && Password == 123456){
        window.location.href = "http://127.0.0.1:5500/firstclass/index.html";
    }

    else{
        alert("Invaild!");
    }

};


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});


loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


 btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

