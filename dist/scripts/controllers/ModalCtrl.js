(function(){
  function ModalCtrl($uibModal, Room, MessageService, $scope, $cookies){
    var ctrl = this;

    ctrl.rooms = Room.all;

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
      console.log("set room");
      ctrl.currentRoom = room;
      Room.getMessages(room.$id, function (messages) {
        $scope.messages = messages;
        $scope.roomId = room.$id;
      });

    };

    ctrl.sendMessage = function(message){
      message.userName = $cookies.get('blocChatCurrentUser');
      console.log(message.userName);
      message.roomId = $scope.roomId;
      MessageService.sendMessage(message);
    };

    ctrl.deleteRoom = function(room){
      Room.delete(room);
    };

    ctrl.getMessagesByRoom = function(room) {
      console.log(ctrl.currentRoom);
      return MessageService.all;
    };


  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', 'Room', 'MessageService', '$scope', '$cookies', ModalCtrl]);

})();
