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
            var arrSize = [giay.size];
            console.log('arrS',arrSize);
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
                         <button>${giay.size[1]}</button>
                          <button>${giay.size[2]}</button>
                         <button>${giay.size[3]}</button>
                         <button>${giay.size[4]}</button>
                         <button>${giay.size[5]}</button>

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

        getRelatedItem = () => {
      let getRelated = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
        method: "GET",
      })
        .then((resp) => {
          let product = resp.data.content.relatedProducts;
          let output = ``;
          product.forEach((item) => {
            output += `<div class="col-12 col-lg-4">
            <div class="container">
              <div class="card">
                <div class="pic">
                  <img src="${item.image}" alt="...."/>
                </div>
                <div class="card-body">
                    <p class="name">${item.name}</p>
                    <p class="price">$${item.price}</p>
                    <div class="btn">
                      <a href="./detail.html?productid=${item.id}" class="custom-btn btn-buy">Buy now</a>
                    </div>
                </div>
            </div>
            </div>
          </div>`;
          });
          document.querySelector("#list-giay").innerHTML = output;
        })
        .catch((err) => {
          document.querySelector(
            ".related .container"
          ).innerHTML = `<h3 class="text-center mt-5">Oops ! Somethings Went Wrong <br> Please come back later !</h3>`;
        });
    };
    getRelatedItem();

};








