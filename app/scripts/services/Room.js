(function() {
  function Room($firebaseArray) {
    var Room = {};

    var roomRef = firebase.database().ref().child("rooms");
    var firebaseRef = new firebase.database().ref();

    var rooms = $firebaseArray(roomRef);

    Room.addRoom = function(room) {
      rooms.$add({name: room.name})
    };

    Room.delete = function(roomID) {
      rooms.$remove(roomID);
    };

    Room.bind = function() {
      return rooms;
    };

    return Room;
  };


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
