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

    Room.all = rooms;

    return Room;
  };


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', 'MessageService', Room]);
})();
