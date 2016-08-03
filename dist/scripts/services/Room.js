(function(){
  function Room($firebaseArray){
    var Room = {};

    var firebaseRef = new firebase.database().ref();
    var roomRef = firebase.database().ref().child("rooms");
    var messageRef = new firebase.database().ref().child("messages");
    var messages = $firebaseArray(messageRef);
    var rooms = $firebaseArray(roomRef);

    Room.addRoom = function(room) {
      rooms.$add({name: room.name})
    };

    Room.delete = function(roomID) {
      rooms.$remove(roomID);
    };

    Room.getMessages = function(roomID, callback) {
      messageRef.orderByChild('roomID').equalTo(roomID).on('value', function(messages) {
        callback(messages.val());
      });
    };

//    Room.bindLastTaskToValue = function(callback) {
//      roomRef.orderByChild("createdAt").limitToLast(1).once("value", function (snap) {
//        snap.forEach(function (room) {
//          callback(room.key(), room.val());
//        });
//      });
//    };

    Room.bind = function() {
      return rooms;
    };

    return Room;
  };


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
