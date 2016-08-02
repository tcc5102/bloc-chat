(function(){
  function ModalInstanceCtrl($uibModalInstance, Room, $scope){

    var ctrl = this;

    ctrl.addRoom = function(room){
      Room.addRoom(room);
    };

    $scope.createRoom = function(){
       ctrl.addRoom($scope.room);
       $uibModalInstance.close();
    };

    $scope.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', '$scope', ModalInstanceCtrl])

})();
