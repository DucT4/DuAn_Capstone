window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params', myParam);

    //call api load lên giao diện

    (function () {
        let promise = axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
            method: 'GET',
        }).then(function (res) {
            // console.log(res.data);
            var content = '';
            var giay = res.data.content;
            console.log('giay',giay);
            // for (var index = 0; index < arrGiay.length; index++) {
            //     var giay = arrGiay[index];
                content = `
                  <div class="row">
                  <div class="col-5 img">
                    <img src="${giay.image}" alt="...">
                  </div>
                  <div class="col-7 explain">
                    <h3 class="product_name">${giay.name}</h3>
                    <span class="nd"> ${giay.description}  </span>
                    <h3 class="Avai">Avaiable sLoremize</h3>
                    <div class="size">
                         <button>${giay.size,1}</button>
                          <button>${giay.size,2}</button>
                         <button>${giay.size,3}</button>
                         <button>${giay.size,4}</button>
                         <button>${giay.size,5}</button>
                    </div>
                    <div class="price"><span> Price:</span>  ${giay.price}$ </div>
                    <div class="quantity-field">
                       <button class="value-button decrease-button" onclick="decreaseValue(this)" title="Azalt">-</button>
                          <div class="number">0</div>
                       <button class="value-button increase-button" onclick="increaseValue(this, 5)" title="Arrtır">+
                       </button>
                     </div>
                     <div class="add">
                        <button class="btn btn-success ">Add to cart</button>
                     </div>
                  </div>
                </div>
                  `;
            // }
            document.querySelector('#product_datails').innerHTML = content;
        }).catch(function (err) {
            console.log(err.response.data)
        })

    })();

};




(function (){
  let promise = axios({
    url:'https://shop.cyberlearn.vn/api/Product',
    method:'GET'
  }).then(function(res){
    console.log('arrGiay',res.data)
    let arrGiay = res.data.content;
    let content ='';
    for(let index=0; index<arrGiay.length; index++){
         let giay= arrGiay[index];
         content += `
         <div class="col-2">
         <div class="card">
             <div class="pic">
               <img src="${giay.image}" alt="...."/>
             </div>
             <div class="card-body">
                 <p class="name">${giay.name}</p>
                 <p class="price">${giay.price}$</p>
                 <div class="btn">
                     <a   href="./detail.html?productid=${giay.id}"class="custom-btn btn-buy">Buy now</a>
                 </div>
             </div>
             </div>
             </div>
        </div>   
         
         `;
    }
    document.querySelector('#list-giay').innerHTML = content;
  })
})();




