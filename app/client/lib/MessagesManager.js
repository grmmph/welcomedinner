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
     if (!_.isString(receiverId) || !_.isString(content)) {
       return;
     }

     return Messages.insert({
       createdAt: new Date(),
       sender: Meteor.userId(),
       receiver: receiverId,
       content: content
     });
   },

   /**
    * Get user conversations
    * @return conversations {Array}
    */
   getUsersConversations: function () {
     return _.map(_.uniq(Messages.find().fetch(), function (message) {
       return (message.receiver && message.reciever !== Meteor.userId()) ||  (message.sender && message.sender !== Meteor.userId());
     }), function (message) {
       var conversation = {}
       if (Meteor.userId() === conversation.reciever) {
         conversation.partner = UsersManager.getUserById(message.sender)
       } else {
         conversation.partner = UsersManager.getUserById(message.receiver)
       }
       return conversation;
     });
   }
 };
