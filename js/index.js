(function ()
{
    var promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    }).then(function(res){

        console.log(res.data);
        var manggiay = res.data.content;
        var content ='';
        for(var index = 0; index < manggiay.length;index++)
        {
            //Mỗi lần duyệt lấy ra 1 object phim
            var giay = manggiay[index];

            content +=`
            <div class="col-3">
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
            </div>`
        }
        document.querySelector('#list-giay').innerHTML = content;

    }).catch(function(err){

        console.log(err.response.data)

    })

})();



(function ()
{
    var promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=ADIDAS',
        method: 'GET',
    }).then(function(res){

        console.log(res.data);
        var manggiay = res.data.content;
        var content ='';
        for(var index = 0; index < manggiay.length;index++)
        {
            //Mỗi lần duyệt lấy ra 1 object phim
            var giay = manggiay[index];

            content +=`
            <div class="col-3">
                    <div class="card">
                        <div class="pic">
                          <img src="${giay.image}" alt="...."/>
                        </div>
                        <div class="card-body">
                            <p class="name">${giay.name}</p>
                            <p class="price">${giay.price}$</p>
                            <div class="btn">
                                <a  href="./detail.html?productid=${giay.id}" class="custom-btn btn-buy">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }
        document.querySelector('#list-giay-adidas').innerHTML = content;

    }).catch(function(err){

        console.log(err.response.data)

    })

})();



(function ()
{
    var promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=NIKE',
        method: 'GET',
    }).then(function(res){

        console.log(res.data);
        var manggiay = res.data.content;
        var content ='';
        for(var index = 0; index < manggiay.length;index++)
        {
            //Mỗi lần duyệt lấy ra 1 object phim
            var giay = manggiay[index];

            content +=`
            <div class="col-3">
                    <div class="card">
                        <div class="pic">
                          <img src="${giay.image}" alt="...."/>
                        </div>
                        <div class="card-body">
                            <p class="name">${giay.name}</p>
                            <p class="price">${giay.price}$</p>
                            <div class="btn">
                                <a  href="./detail.html?productid=${giay.id}" class="custom-btn btn-buy">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }
        document.querySelector('#list-giay-nike').innerHTML = content;

    }).catch(function(err){

        console.log(err.response.data)

    })

})();

(function ()
{
    var promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=VANS_CONVERSE',
        method: 'GET',
    }).then(function(res){

        console.log(res.data);
        var manggiay = res.data.content;
        var content ='';
        for(var index = 0; index < manggiay.length;index++)
        {
            //Mỗi lần duyệt lấy ra 1 object phim
            var giay = manggiay[index];

            content +=`
            <div class="col-3">
                    <div class="card">
                        <div class="pic">
                          <img src="${giay.image}" alt="...."/>
                        </div>
                        <div class="card-body">
                            <p class="name">${giay.name}</p>
                            <p class="price">${giay.price}$</p>
                            <div class="btn">
                                <a  href="./detail.html?productid=${giay.id}" class="custom-btn btn-buy">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }
        document.querySelector('#list-giay-vans').innerHTML = content;

    }).catch(function(err){

        console.log(err.response.data)

    })

})();


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
