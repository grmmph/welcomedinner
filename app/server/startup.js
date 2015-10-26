Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/public/uploads/tmp',
    uploadDir: process.env.PWD + '/public/uploads/',
    checkCreateDirectories: true,
    overwrite: true,
    getFileName: function(fileInfo, formData) {
     return 'profile-' + formData.uid + '.jpg';
    },
    finished: function(fileInfo, formData) {
      Meteor.users.update(formData.uid, { $set: { "profile.image": fileInfo.name }});
    },
  });
});
