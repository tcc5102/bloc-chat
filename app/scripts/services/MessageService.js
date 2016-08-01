(function(){
  function MessageService($firebaseArray){
    var MessageService ={};

    var firebaseRef = new firebase.database().ref();
    var messages = $firebaseArray(firebaseRef.child('messages'));

    MessageService.sendMessage = function(message){
      messages.$add({userName: message.userName,
                  content: message.content,
                  sentAt: Firebase.ServerValue.TIMESTAMP,
                   roomId: message.roomId
                });
    }

    MessageService.bind = function(){
      return messages;
    }

    return MessageService;
  }

  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', MessageService]);

})();
