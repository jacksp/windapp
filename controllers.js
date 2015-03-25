'use strict'

var MainCtrl = angular.module('MainCtrl');

MainCtrl.controller('MainCtrl', function($scope) {
    $scope.alert = false;
    $scope.submit = function(spot) {
        $scope.alert = "Votre spot a bien été ajouté !";
        console.log(spot);
    }
});
