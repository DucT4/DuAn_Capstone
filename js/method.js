function kiemTraRong(value, name){
  if(value.trim()===''){
    document.querySelector(`#error-required-${name}`).innerHTML = ` <i class="fa fa-exclamation-circle"></i>
    must not be left blank ${name} !!`;
    return false;
  }
  return true;
}
 function kiemTraEmail(value,name){
     let regexEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(regexEmail.test(value)){
        document.querySelector(`#error-regex-${name}`).innerHTML='';
        return true;
     }
     document.querySelector(`#error-regex-${name}`).innerHTML=` <i class="fa fa-exclamation-circle"></i>
     Please fill out the form correctly!!`;
     return false;
     
 }
function kiemTraPassWord(value,name){
    let regexPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(value.match(regexPassword)){
        document.querySelector(`#error-regex-${name}`).innerHTML='';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML=` <i class="fa fa-exclamation-circle"></i> Special characters,capital characters,numbers!!`;
     return false;
}
 function kiemTraKiTu(value,name){
    let regexLetter =/^[A-Z a-záàạảãăặẵẳằắ]+$/;;
    if(regexLetter.test(value.trim())){
        document.querySelector(`#error-regex-${name}`).innerHTML='';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML=`
    <i class="fa fa-exclamation-circle"></i> Name must not contain numbers!!`;
 }


