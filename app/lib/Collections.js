Messages = new Meteor.Collection('messages');
Conversations = new Meteor.Collection('conversations');

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
 stores: [imageStore]
});
