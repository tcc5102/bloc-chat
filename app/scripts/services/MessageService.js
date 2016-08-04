(function(){
  function MessageService($firebaseArray, $cookies){
    console.log("message service loaded");
    var MessageService ={};
    var firebaseRef = new firebase.database().ref();
    var messageRef = new firebase.database().ref().child("messages");
    var messages = $firebaseArray(messageRef);

    MessageService.sendMessage = function(message){
      messages.$add({userName: message.userName,
                  content: message.content,
                  sentAt: '',
                  roomId: message.roomId
                });
    };

//    MessageService.getByRoom = function(messages) {
//      messageRef.orderByChild('RoomId').equalTo(roomId).on('value', function(messages) {
//        return(messages.val());
//      });
//    };


    MessageService.all = messages;

    return MessageService;
  }


  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', '$cookies', MessageService]);

})();
