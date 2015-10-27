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

     this.insertConversation(Meteor.userId(), receiverId);

     return Messages.insert({
       createdAt: new Date(),
       sender: Meteor.userId(),
       receiver: receiverId,
       content: content
     });
   },

   insertConversation: function (sender, receiver) {
    if (Conversations.find({parties: { $all: [sender,receiver] }}).fetch().length) {
      return;
    }
    Conversations.insert({
      parties: [sender, receiver],
      createdAt: new Date()
    });
   },

   getLastMessage: function (partyId) {
     return Messages.findOne({$or: [{ sender: partyId }, { receiver: partyId }] }, {sort: {createdAt: -1}});
   },

   getOtherPartiesFromConversations: function () {
     return _.without(_.flatten(_.map(Conversations.find().fetch(), function (conv) {
       return conv.parties;
     })), Meteor.userId());
   },

   /**
    * Get user conversations
    * @return conversations {Array}
    */
   getUsersConversations: function () {
     return _.map(this.getOtherPartiesFromConversations(), function (partyId) {
       console.log(UsersManager.getUserById(partyId))
       return {
         partner: UsersManager.getUserById(partyId),
         lastMessage: MessagesManager.getLastMessage(partyId)
       };
     });
   }
 };
