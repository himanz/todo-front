'use strict';

angular.module('todo')
  .controller('AuthCtrl', ['$scope', '$auth', '$location', '$rootScope', function ($scope, $auth, $location, $rootScope) {
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
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginForm)       
        .then(function(resp) { 
          // handle success response
          $location.path('/tasks');
        })
        .catch(function(resp) { 
          // handle error response
        });
        $auth.validateUser().then(function() {
          console.log($rootScope.user);
        });
        
    };
    $scope.login = function () {
      $auth.submitLogin({
        email: $scope.email,
        password: $scope.password
      });
    };
    // auth.$login('password', user).then(function(data) {
    //       console.log(data);
    //       if (optionalCallback) {
    //         optionalCallback();
    //       }
    //       // Redirect users to /waitlist.
    //       $location.path('/waitlist');
    //     });
  }]);