(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var userName = $cookies.get('blocChatCurrentUser');
    if (!userName || userName === '') {
      $uibModal.open({
        templateUrl: '/templates/login.html',
        controller: function($scope, $cookies, $uibModalInstance){
          $scope.createUserName = function(userName){
            if(userName && userName !== ''){
              $cookies.blocChatCurrentUser = userName;
//              $cookies.put('blocChatCurrentUser', userName);
              $uibModalInstance.close();
            } else{
              $scope.errorMessage = 'Invalid username.';
            }
          };
        },
        size: 'sm',
        backdrop: 'static',
        keyboard: false
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
