/**
 * @class Messages Manager
 */

 MessagesManager = {
   /**
    * Inserts a new message
    * @param receiverId {String} Id of receiver
    * @param content {String} Message content
    * @return messageId {String}
    */
   sendMessage: function (receiverId, content) {
     return Messages.insert({
       createdAt: new Date(),
       sender: Meteor.userId(),
       receiver: receiverId,
       content: content
     });
   }
 };
