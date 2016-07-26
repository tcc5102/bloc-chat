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
  }

  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();
