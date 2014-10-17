'use strict';

angular.module('todo')
  .controller('AuthCtrl', ['$scope', '$auth', function ($scope, $auth) {
    // $rootScope.$on('auth:login-success', function(ev, user) {
    //   alert('Welcome ', user.email);
    // });
    // $scope.handleRegBtnClick = function() {
    //   $auth.submitRegistration($scope.registrationForm)
    //     .then(function(resp) { 
    //       // handle success response
    //       return resp;
    //     })
    //     .catch(function(resp) { 
    //       // handle error response
    //       if(resp.status === 401) {
    //         console.log('ERROR');
    //       }
    //     });
    // };
    // $scope.handleLoginBtnClick = function() {
    //   $auth.submitLogin($scope.loginForm)       
    //     .then(function(resp) { 
    //       // handle success response
    //     })
    //     .catch(function(resp) { 
    //       // handle error response
    //     });  
    // };
  }]);