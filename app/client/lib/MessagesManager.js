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

   /**
    * Get user conversations
    * @return conversations {Array}
    */
   getUsersConversations: function () {
     return _.map(this.getOtherPartiesFromConversations(), function (partyId) {
       return {
         partner: UsersManager.getUserById(partyId),
         lastMessage: MessagesManager.getLastMessage(partyId)
       };
     });
   },

   // PRIVATE FUNCTIONS
   // ------------------
   /**
    * @private
    * @param sender {String} Sender id
    * @param receiver {String} Receiver id
    * @param ConversationID {String}
    */
   insertConversation: function (sender, receiver) {
    if (Conversations.find({parties: { $all: [sender,receiver] }}).fetch().length) {
      return;
    }
    return Conversations.insert({
      parties: [sender, receiver],
      createdAt: new Date()
    });
   },

   /**
    * @private
    * @param partyId {String} user Id of other party
    * @return message {Object} Last message between user and the party
    */
   getLastMessage: function (partyId) {
     return Messages.findOne({$or: [{ sender: partyId }, { receiver: partyId }] }, {sort: {createdAt: -1}});
   },

   /**
    * @private
    * Grabbing the parties ids from all conversations
    * @return otherParties {Array} Array of ids
    */
   getOtherPartiesFromConversations: function () {
     return _.without(_.flatten(_.map(Conversations.find().fetch(), function (conv) {
       return conv.parties;
     })), Meteor.userId());
   }

 };
