(function() {
  function BlocChatCookies($cookies, $uibModal, LoginCtrl) {
    var userName = $cookies.get('blocChatCurrentUser');
    if (!userName || userName === '') {
      $uibModal.open({
        templateUrl: '/templates/login.html',
//        controller: 'LoginCtrl',
        size: 'sm',
        backdrop: 'static',
        keyboard: false
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies])
    .controller('LoginCtrl');
})();
