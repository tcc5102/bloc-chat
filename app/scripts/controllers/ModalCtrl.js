(function(){
  function ModalCtrl($uibModal, Room, $scope){
    var ctrl = this;

    ctrl.rooms = Room.bind();

//    ctrl.rooms.$loaded().then(function(x) {
//      Room.bindLastTaskToValue(function(key, room){
//        ctrl.currentRoom = room;
//        $scope.roomId = key;
//
////        Room.getMessages(key, function (messages) {
////          $scope.messages = messages;
////        });
//      });
//    })

    ctrl.open = function () {
        $uibModal.open({
          templateUrl: '/templates/modalContent.html',
          controller: 'ModalInstanceCtrl',
          resolve: {
            rooms: function () {
              return ctrl.rooms;
            }
          }
        });
      };

    ctrl.setRoom = function(room){
      ctrl.currentRoom = room;
//      Room.getMessages(room.$id, function (messages) {
//        $scope.messages = messages;
//        $scope.roomId = room.$id;
//      });

    };


//    ctrl.sendMessage = function(message){
//      message.userName = $cookies.get('chatRoomCurrentUser');
//      message.roomId = $scope.roomId;
//      MessageService.sendMessage(message);
//    }

  ctrl.deleteRoom = function(room){
    Room.delete(room);
  }

  };

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', 'Room', '$scope', ModalCtrl]);

})();
