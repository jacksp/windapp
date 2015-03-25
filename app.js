'use strict';


var windApp = angular.module('windApp', []);

windApp.controller('MainCtrl', function($scope, $http){
    $scope.alert = false;
    $scope.submit = function(spot) {
        $scope.alertSuccess = "Votre spot a bien été ajouté !";
        console.log(spot);
    }
});
