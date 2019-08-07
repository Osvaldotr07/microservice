const app = angular.module('myApp', []);

app.controller('myController', ($scope) => {
    $scope.nombres = ['Osvaldo', 'Sergio', 'Raul']

    $scope.editar = function(){
        $scope.nombre = "Sergio"
    }
})