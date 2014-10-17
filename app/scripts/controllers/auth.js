'use strict';

angular.module('todo')
  .controller('AuthCtrl', ['$scope', '$auth', function ($scope, $auth) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) { 
          // handle success response
          return resp;
        })
        .catch(function(resp) { 
          // handle error response
          if(resp.status === 401) {
            console.log('ERROR');
          }
        });
    };
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginForm)       
        .then(function(resp) { 
          // handle success response
        })
        .catch(function(resp) { 
          // handle error response
        });  
    };
  }]);