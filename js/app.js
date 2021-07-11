var app = angular.module('universidadApp',[ 'ngRoute' ]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

    $scope.menuSuperior = 'parciales/menu.html';
  
    $scope.setActive = function(opcion){
        $scope.mInicio = "";
        $scope.mProfesores = "";
        $scope.mAlumnos = "";

        $scope[opcion] = "active";
    }

}]);

// Filtro personalizado de teléfono
app.filter('telefono',function(){
    return function(numero){
        return numero.substring(0,4) + "-" + numero.substring(4);
    }
});