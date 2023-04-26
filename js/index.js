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
            <div class="col-md-4">
                    <div class="card">
                        <img src="${giay.image}" alt="...."/>

                        <div class="card-body">
                            <div class="name-price">
                            <h4 class="name">${giay.name}</h4>
                                <p class="price">${giay.price}$</p>
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