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
}