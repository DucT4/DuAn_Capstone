
import {ThongTin} from "../models/ThongTin.js";
let arrThongTin = [];
document.querySelector('#btnSubmit').onclick = function (event) {
   event.preventDefault();//chặn sự kiện reload lại trang
   let newThongTin = new ThongTin();
   newThongTin.name = document.querySelector('#name').value;
   newThongTin.email = document.querySelector('#email').value;
   newThongTin.password = document.querySelector('#passWord').value;
   newThongTin.phone = document.querySelector('#phone').value;
   newThongTin.gender = document.querySelector('#gridCheck').checked;
   newThongTin.confirmPassword = document.querySelector('#confirmPass').value;


   if (newThongTin.password != newThongTin.confirmPassword) {
      document.querySelector('#confirmPass').innerHTML = '';
      return false;
   } else {
      document.querySelector('#confirmPass').innerHTML = newThongTin.confirmPassword;

   }

   arrThongTin.push(newThongTin);

   let valid = true;

   valid = kiemTraRong(newThongTin.phone, 'phone') & kiemTraEmail(newThongTin.email, 'email') & kiemTraPassWord(newThongTin.password, 'password') & kiemTraKiTu(newThongTin.name, 'name') & kiemTraRong(newThongTin.confirmPassword, 'confirmPass');
   if (!valid) {
      return;
   }



   if (newThongTin.gender === true) {
      newThongTin.gender = 'Male'
   } else {
      newThongTin.gender = 'Female'
   }

   let promise = axios.post("https://shop.cyberlearn.vn/api/Users/signup", {
      "email": newThongTin.email,
      "password": newThongTin.password,
      "name": newThongTin.name,
      "gender": newThongTin.gender,
      "phone": newThongTin.phone
   });

   promise.then(function (ketQua) {
      console.log('ketQua', ketQua.data.content);
   });
   promise.catch(function (err) {
      console.log('err', err);
   })


   saveStorage(arrThongTin);
}

function saveStorage(arrThongTin) {
   let sArrThongTin = JSON.stringify(arrThongTin);
   localStorage.setItem('arrThongTin', sArrThongTin);
}



function getStorage() {
   if (localStorage.getItem('arrThongTin')) {
      // lấy biến trong local gắn cho biến stringArrThongTin
      let stringArrTT = localStorage.getItem('arrThongTin');
      // chuyễn đổi stringArrTT thành dạng object
      arrThongTin = JSON.parse(stringArrTT);
      // console.log('arrTt', arrThongTin);
   }
}
getStorage();













