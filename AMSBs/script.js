function validateForm(){
let userName = document.getElementById('name');
let userEmail = document.getElementById('mail');
let phoneNumber = document.getElementById('number');

if(userName.value==''){
userName.classList.add('error');
userName.nextElementSibling.innerText='please enter name';
userName.scrollIntoView({behaviour:'smooth'});
return false;
}

if(userEmail.value==''){
userEmail.classList.add('error');
userEmail.nextElementSibling.innerText='please enter Email';
userEmail.scrollIntoView({behaviour:'smooth'});
return false;
}

if(phoneNumber.value==''){
phoneNumber.classList.add('error');
phoneNumber.nextElementSibling.innerText='please enter the phone Number';
phoneNumber.scrollIntoView({behaviour:'smooth'});
return false;
}

return true;

}

let inputFields = document.querySelectorAll('.form-control');
inputFields.forEach(function(inputData){
inputData.addEventListener('focus',function(){
inputData.classList.remove('error');
inputData.nextElementSibling.innerText='';
});

});