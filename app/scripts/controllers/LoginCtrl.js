(function(){
  function LoginCtrl($scope, $cookies, $uibModalInstance){
    console.log("LoginCtrl");
    $scope.createUserName = function(userName){
      console.log("LoginCtrl");
      if(userName && userName !== ''){
        $cookies.blocChatCurrentUser = userName;

        $uibModalInstance.close();

      } else{
          $scope.errorMessage = 'Invalid username.';
      }
    };

  }

  angular
    .module('blocChat')
    .controller('LoginCtrl', ['$scope', '$cookies', '$uibModalInstance', '$firebase', LoginCtrl]);
})();

// firebase?
