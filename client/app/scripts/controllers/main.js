'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
app.controller('clientApp.controllers.MainCtrl', ['$scope','initService','requestService','$rootScope','$state','ENV',
function ($scope, initService, requestService, $rootScope, $state, ENV) {

    var apiUrl = ENV.transferProtocol + ENV.apiEndpoint;

    $scope.loginWithGoogle = function(){
        var url = apiUrl + '/login';
        var data = {};
        requestService(url, data, 'POST', function(success, data, status, headers, config){
            if(success) {
                if(data.status) {

                }
            } else {
                $rootScope.errorHandler(status);
            }
        });
    };

}]);
