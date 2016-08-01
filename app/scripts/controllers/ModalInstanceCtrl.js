(function(){
  function ModalInstanceCtrl($uibModalInstance, Room, $scope){

    var here = this;

    here.addRoom = function(room){
      Room.addRoom(room);
    };

    $scope.createRoom = function(){
       here.addRoom($scope.room);
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
