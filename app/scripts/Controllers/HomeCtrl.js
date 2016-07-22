function() {
  function HomeCtrl(room) {
    this.rooms = room;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['home' , HomeCtrl]);
})();
