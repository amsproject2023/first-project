function validateFormData(){
const formData = {
username:document.getElementById('name').value,
useremail:document.getElementById('mail').value,
phonenumber:document.getElementById('number').value
}

if (formData.username==''){
document.getElementById('error_msg').style='display:block';
document.getElementById('name').style='border:2px solid red';
}
else{
document.getElementById('error_msg').style='display:none';
document.getElementById('name').style='border:2px solid black';
return false;
}
 if (formData.useremail==''){
document.getElementById('error_msg1').style='display:block';
document.getElementById('mail').style='border:2px solid red';

}
else{
document.getElementById('error_msg1').style='display:none';
document.getElementById('mail').style='border:2px solid black';
return false;
}


if (formData.phonenumber==''){
document.getElementById('error_msg2').style='display:block';
document.getElementById('number').style='border:2px solid red';
}
else{
document.getElementById('error_msg2').style='display:none';
document.getElementById('number').style='border:2px solid black';
return false;
}

const jsonData = JSON.stringify(formData);
localStorage.setItem(formData.name,jsonData);
const parseData = JSON.parse(localStorage.getItem(formData.name));
//alert(parseData.username);
document.getElementById('result1').innerHTML=parseData.username;
document.getElementById('result2').innerHTML=parseData.useremail;
document.getElementById('result3').innerHTML=parseData.phonenumber;

return false;
}

