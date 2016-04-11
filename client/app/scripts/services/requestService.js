/**
 * Created by anshul on 09/4/16.
 */

app.factory('requestService', ['$http', '$rootScope', function($http, $rootScope) {
    var header = {};
    return function(url, data, type, callback) {
        // if(typeof $rootScope.token !== "undefined" && $rootScope.token != null) {
        //     header['Auth'] = $rootScope.token
        // }
        $http({method: type, url: url, data : data, headers : header})
            .success(function(data, status, headers, config){
                callback(true, data, status, headers, config)
            }).error(function(data, status, headers, config){
                callback(false, data, status, headers, config)
            });

    }
}]);
