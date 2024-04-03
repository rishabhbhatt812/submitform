const nextButton =  document.querySelector('.btn-next')
const prevButton =  document.querySelector('.btn-prev')
const steps =  document.querySelectorAll('.step');
const form_step = document.querySelectorAll('.form-step');
const edu = document.querySelector('.education');
const addcss = document.querySelector(".add");


let active = 1 ;
nextButton.addEventListener('click',()=>{
  active++;
  if(active > steps.length){
    active = steps.length;
  }
  updateProgress();
})

prevButton.addEventListener('click',()=>{
  active--;
  if(active <1){
    active =1;
  }
  updateProgress();
})

const updateProgress = ()=>{
  steps.forEach((step, i)=>{
    if(i ==(active-1)){
     step.classList.add('active');
     form_step[i].classList.add('active');
   }else{
    step.classList.remove('active');
    form_step[i].classList.remove('active');
   }
  });

  if(active===1){
    prevButton.disabled = true;
  }else if(active === steps.length){
    nextButton.disabled = true ;
  }else{
    prevButton.disabled = false ;
    nextButton.disabled = false ;
  }
}
 
const name_error = document.querySelector('#name-error');

function validateName(){
  const name = document.querySelector("#name").value;
  const addcss = document.querySelector("#name");
  if(name.length ==0){
    name_error.innerHTML ='Name is required';
    addcss.classList.add('error');
    return false;
  }
  name_error.innerHTML='<i class="fa-solid fa-check"></i>';
  addcss.classList.remove('error');
  addcss.classList.add('correct');

  return true;
 
}

const  last_error = document.querySelector('#last-error');

function validateLastName(){
  const addcss = document.querySelector("#lastname");
  const  last = document.querySelector("#lastname").value;
  if(last.length==0){
    addcss.classList.add('error');
    last_error.innerHTML = 'Last Name is Required';
    return false;
    }
    last_error.innerHTML= '<i class="fa-solid fa-check"></i>';
    addcss.classList.remove('error');
    return true;
  }


const  DOB_error = document.querySelector('#DOB-error');

function validateDOB(){
  const  dob = document.querySelector("#dob").value;
  const addcss = document.querySelector("#dob");
    if(dob.length==0){
      addcss.classList.add('error');
  DOB_error.innerHTML= 'Invalid Date';
    return false;
    }else{
      addcss.classList.remove('error');
      DOB_error.innerHTML= '<i class="fa-solid fa-check"></i>';
      return true;
    }
   
  }

  const Degree_error = document.querySelector('#degree-error');
  function validdegree(){
    const  degree =  document.querySelector('#degree');
    if(degree.value ==" "){
      degree.classList.add('error');
    Degree_error.innerHTML ='Select your Degree';
    return false ;
    }
     degree.classList.remove('error');
      Degree_error.innerHTML ='<i class="fa-solid fa-check"></i>';
      return true;
  }

  
  const  unierror = document.querySelector("#University-error");
  function validateuniname(){
    const addcss = document.querySelector("#uniname");
    const  university= document.querySelector('#uniname').value;
    if(university.length==0){
      addcss.classList.add('error');
      unierror.innerHTML = 'University is required';
      return false ;
    }
    else{
      addcss.classList.remove('error');
      unierror.innerHTML = '<i class="fa-solid fa-check"></i>';
      return true ;
    }
  }


  const  scoreerror = document.querySelector('#Score-error');
  function  validateScore(){
    const  marks = document.querySelector("#Score").value;
   const addcss = document.querySelector("#Score");
    if(marks <1 || marks >100 || marks.length == 0  ){
      addcss.classList.add('error');
      scoreerror.innerHTML = "Invalid marks";
      return false ;
    }
    else{
      addcss.classList.remove('error');
      scoreerror.innerHTML = '<i class="fa-solid fa-check"></i>';
      return true ;
    }

  }


  const  MarkSheet = document.querySelector('#MarkSheet-error');
  function validatemark(){
    const sheet = document.querySelector('#mark');
    var filepath = sheet.value;

    var allowsheet = ['image/jpeg','image/png','application/pdf'];
    if(!allowsheet.exce(filepath)){
     MarkSheet.innerHTML= "Invalid file type";
     return false;
    }else{
      MarkSheet.innerHTML ="thk h";
      return true ;
    }
  } 

  const phoneerror = document.querySelector('#phone-error');

  function  validatephone(){
    const phone = document.querySelector('#Phone').value;
    const addcss = document.querySelector('#Phone');
    if(phone==""){
      addcss.classList.add('error')
      phoneerror.innerHTML =" number is required";
      return false ;
    }
    if(isNaN(phone)){
      addcss.classList.add('error');
      phoneerror.innerHTML ="please fill numbers";
      return false;
    }
    if(phone.length <9 ){
      addcss.classList.add('error');
      phoneerror.innerHTML ="Please fill the number";
     return false ;
     }if(phone.length >10 ){
      addcss.classList.add('error');
      phoneerror.innerHTML ="Only 10 digit number allowed";
     return false ;
    }if((phone.charAt(0)!= 9) && (phone.charAt(0)!= 8)  ){
      addcss.classList.add('error');
      phoneerror.innerHTML ="number start from 9 or 8";
     return false ;
    }
     else{
      addcss.classList.remove('error');
      phoneerror.innerHTML ='<i class="fa-solid fa-check"></i>';
      return true ;
     }

  }


  const emailerror = document.querySelector("#Email-error");

  function  validateemail(){
    const email = document.querySelector("#email").value;
    const addcss = document.querySelector("#email");
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
  if(regx.test(email)){
    addcss.classList.remove('error');
    emailerror.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true ;
  }
  else{
    addcss.classList.add('error');
    emailerror.innerHTML="Invalid Email";
    return false;
  }
  }

  const addreserror = document.querySelector("#address-error");

  function validateads(){
    const  address = document.querySelector("#ads").value;
    const nearads = document.querySelector("#adss").value;
    const  addcss = document.querySelector("#ads")
    const adcss = document.querySelector("#adss")
    if(address == "" ){
      addcss.classList.add('error');
      addreserror.innerHTML = "**Please fill  address";
      return false ;
    }if( nearads ==""){
      adcss.classList.add('error');
      addreserror.innerHTML = "**Please fill nearby address";
      return false ;
    }
    else{
      addcss.classList.remove("error");
      adcss.classList.remove('error');
      addreserror.innerHTML ='<i class="fa-solid fa-check"></i>';
      return true ;
    }
  }

 const cityerror = document.querySelector('#city-error');

 function validatecity(){
   const city = document.querySelector("#city").value ;
   const addcss = document.querySelector('#city');
   if(city.length==0){
    addcss.classList.add('error');
    cityerror.innerHTML = "**City is required";
    return false ;
   }else{
    addcss.classList.remove('error');
    cityerror.innerHTML ='<i class="fa-solid fa-check"></i>';
    return true ;
   }
 }

 const stateerror = document.querySelector("#state-error");

 function  validatestate(){
   const  state = document.querySelector('#state').value ;
   const addcss = document.querySelector('#state');
   if( state ==" "){
    addcss.classList.add('error');
    stateerror.innerHTML = " **State is required";
    return false;
   }else{
    addcss.classList.remove('error');
    stateerror.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true ;
   }
 }

 const Codeerror = document.querySelector("#Code-error");

 function  validatecode(){
  const code = document.querySelector('#code').value ;
  const addcss =document.querySelector('#code');
  if(code.length==0 || code.length !=6){
    addcss.classList.add('error');
    Codeerror.innerHTML = "**Please fill ZIP code";
    return false;
  }
  if(!/^[0-9]+$/.test(code)){
    addcss.classList.add('error');
    Codeerror.innerHTML = "Invalid  Code";
    return false ;
  }else{
    addcss.classList.remove('error');
    Codeerror.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;  }
 }
 

 const submiterror = document.querySelector('.error-msg');
 const popup = document.querySelector('#popup');
 function validateForm(){
  const form = document.querySelector('.form');
 
  if(!validateName() || !validateLastName() || !validateDOB() || !validdegree() || !validateuniname() || !validateScore() || !validatephone() || !validateemail() || !validateads() || !validatecity() || !validatestate() || !validatecode()){
    submiterror.style.display= 'block';
   submiterror.innerHTML="** Please first fix the Error"
   setTimeout(function(){submiterror.style.display='none';},3000);
   form.classList.add('error');
   form.classList.remove('correct');
  return false;
  }
  form.classList.remove('error');
  form.classList.add('correct');
  popup.classList.add("open-popup");

  return true;
 }
 
 function closepopup(){
  popup.classList.remove("open-popup");
 }

 function display(){
  const  firstname = document.querySelector("#name").value ;
   
   document.querySelector("#namedisplay").innerHTML = firstname;

 }