(function(){
  function Room($firebaseArray, MessageService){
    var Room = {};

    var firebaseRef = new firebase.database().ref();
    var roomRef = firebase.database().ref().child("rooms");
    var messageRef = new firebase.database().ref().child("messages");
    var messages = $firebaseArray(messageRef);
    var rooms = $firebaseArray(roomRef);

    Room.addRoom = function(room) {
      rooms.$add({name: room.name})
    };

    Room.delete = function(roomId) {
      rooms.$remove(roomId);
    };

    Room.getMessages = function(roomID, callback) {
      messageRef.orderByChild('roomID').equalTo(roomID).on('value', function(messages) {
        callback(messages.val());
      });
    };

//    MessageService.getByRoom = function(roomId) {
//      messageRef.orderByChild('roomId').equalTo(roomId).on('value', function(messages) {
//        return(messages.val());
//      });
//    };

    Room.all = rooms;

    return Room;
  };


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', 'MessageService', Room]);
})();
