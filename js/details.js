window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params',myParam)

    //call api load lên giao diện
}


(function(){
    var promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product/getbyid?id=3',
        method:'GET',
        ResponseType: 'JSON'
    }).then(function(res){
        console.log(res.data)
    }).catch(function(err){
        console.log(err.data)
    })

})();