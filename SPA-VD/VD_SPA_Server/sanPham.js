window.spController = function($scope,$http,$location){
    $scope.sanPhams = [];
    $http.get('http://localhost:3000/sanPham').then(function(response){
        $scope.sanPhams = response.data;
    });


    $scope.addSanPham = function(){
        $http.post('http://localhost:3000/sanPham',{
            id: $scope.id,
            name: $scope.tenSP,
            price: $scope.price,
            quantity: $scope.quantity,
            discount: $scope.discount
        })
        .then(function(response){
            if (response.status === 201) {
                alert("Them san pham thanh cong");
                $location.path("/home");
              }
        });

    };

    $scope.loadSanPhamForm = function(id){
        $http.get('http://localhost:3000/sanPham/'+id).then(function(response){
        console.log(response);
        if (response.statusText === "OK") {
            $scope.id = response.data.id;
            $scope.name = response.data.name;
            $scope.price = response.data.price;
            $scope.quantity = response.data.quantity;
            $scope.discount = response.data.discount;
        }
    });
    };

$scope.updateSanPham = function(){
    $http.put('http://localhost:3000/sanPham/'+$scope.id,{
        id: $scope.id,
        name: $scope.tenSP, 
        price: $scope.price,
        quantity: $scope.quantity,
        discount: $scope.discount,
    }).then(function(response){
        if (response.status ===200){
            alert("Sua sản phẩm thành công");
        }
    });
};

}