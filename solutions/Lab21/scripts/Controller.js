var myApp = angular.module("myModule", []);

var myController = function ($scope, $http) {
    $scope.customers = null;
    $scope.errorText = null;
    $scope.loading = false;
    $scope.loadData = function () {

        var successCallback = function (results) {
            $scope.customers = results.data;
            $scope.loading = false;
        }; // end of success

        var failureCallback = function (reason) {
            $scope.errorText = reason.statusText + "\r\n\r\n" + reason.data;
            $scope.loading = false;
        }; // end of Failure

        $scope.customers = null;
        $scope.errorText = null;
        $scope.loading = true;

        $http({
            method: "GET",
            url: "http://localhost:5000/getcustomers"
        }).then(successCallback, failureCallback);

    }; // end of loadData

}; // end of myController

myApp.controller("customerController", myController);