(function(){
  function MessageService($firebaseArray, $cookies){
    console.log("message service loaded");
    var MessageService ={};
    var firebaseRef = new firebase.database().ref();
    var messageRef = new firebase.database().ref().child("messages");
    var messages = $firebaseArray(messageRef);

    MessageService.sendMessage = function(message){
      console.log(message);
      messages.$add({userName: message.userName,
                  content: message.content,
                  sentAt: '',
                  roomId: message.roomId
                });
    };

    MessageService.getByRoom = function(roomId) {
      var messages = $firebaseArray(messageRef.orderByChild('roomId').equalTo(roomId));
        console.log(messages);
        return(messages);
    };


    MessageService.all = messages;

    return MessageService;
  }

  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', '$cookies', MessageService]);

})();
