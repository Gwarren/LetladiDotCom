process.env.MAIL_URL = Meteor.settings.private.emailSetting; 

Meteor.methods({
  sendEmail: function(name, fromEmail, message) {
    check([name, fromEmail, message], [String]);
    
    console.log('sending email');
    
    Meteor.defer(function() {
      Email.send({
        to: Meteor.settings.private.myEmailAddress,
        from: fromEmail,
        subject: Meteor.settings.private.subject + name,
        text: message
      });
      console.log('Email Sent.');
    });
  }
});