(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'ModalCtrl as MainModal',
        templateUrl: '/templates/home.html'
      })
      .state('ModalInstanceCtrl', {
        url: '/',
        controller: 'ModalInstanceCtrl as Modal',
        templateUrl: '/templates/modalContent.html'
      });
//      .state('LoginCtrl', {
//      url: '/',
//      controller: 'LoginCtrl as Login',
//      templateUrl: '/templates/login.html'
//      });
  }

//  function run($cookies,$uibModal) {
//        if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '' ) {
//            $uibModal.open({
//                  //animation: $scope.animationsEnabled,
//                  templateUrl: 'templates/usermodal.html',
//                  controller: 'UserModalInstanceCtrl',
//                  size: 'sm',
//            })
//        }
//  }


  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
    .config(config);
})();
