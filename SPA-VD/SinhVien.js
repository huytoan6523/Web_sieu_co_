window.sinhVienController=function($scope,$http){
    $scope.listSinhVien =[];
    $http.get('http://localhost:3000/user').then(function(response){
        $scope.listSinhVien = response.data;
    });
}