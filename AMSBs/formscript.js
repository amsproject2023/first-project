function validateForm() {
let studentName = document.getElementById('student-name');
let fatherName = document.getElementById('father-name');
let phoneNumber = document.getElementById('phone-number');
let studentAddress = document.getElementById('address');
let schoolName = document.getElementById('school-name');
let aboutUs = document.getElementById('about-us');
let commentBox = document.getElementById('comments');


if (studentName.value==''){
studentName.classList.add('error');
studentName.nextElementSibling.innerText='please enter student name';
studentName.scrollIntoView({behaviour:'smooth'});
return false;
}

if (fatherName.value==''){
fatherName.classList.add('error');
fatherName.nextElementSibling.innerText='please enter father name';
fatherName.scrollIntoView({behaviour:'smooth'});
return false;
}

if (phoneNumber.value==''){
phoneNumber.classList.add('error');
phoneNumber.nextElementSibling.innerText='please enter phone number';
phoneNumber.scrollIntoView({behaviour:'smooth'});
return false;
}

if (studentAddress.value==''){
studentAddress.classList.add('error');
studentAddress.nextElementSibling.innerText='please enter the Address';
studentAddress.scrollIntoView({behaviour:'smooth'});
return false;
}

if (schoolName.value==''){
schoolName.classList.add('error');
schoolName.nextElementSibling.innerText='please enter school name';
schoolName.scrollIntoView({behaviour:'smooth'});
return false;
}

if (aboutUs.value==''){
aboutUs.classList.add('error');
aboutUs.nextElementSibling.innerText='please fill the field';
aboutUs.scrollIntoView({behaviour:'smooth'});
return false;
}

if (commentBox.value==''){
commentBox.classList.add('error');
commentBox.nextElementSibling.innerText='please enter the comments ';
commentBox.scrollIntoView({behaviour:'smooth'});
return false;
}


return true;
}

let formInputs = document.querySelectorAll('.form-control');
formInputs.forEach(function(input){
input.addEventListener('focus',function(){
input.classList.remove('error');
input.nextElementSibling.innerText='';
});
});