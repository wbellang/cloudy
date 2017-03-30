import './login.html';

Template.login.onCreated(function() {
});

Template.login.onRendered(function() {
  let template = Template.instance();

  $("#log-in").validate({
    rules: {
      email: {
        required: true
      },
      password: {
        required: true
      }
    },
    messages: {
      email: {
        required: 'Email is required.'
      },
      password: {
        required: 'Password is required.'
      }
    },
    submitHandler() {
      let email = template.find("[name='email']").value;
      let password = template.find("[name='password']").value;

      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          console.log('Unable to login', err);
          Bert.alert(err.reason, 'danger', 'fixed-top');
        } else {
          console.log('User logged in successfully', Meteor.user())
          FlowRouter.go('home');
        }
      });
    }
  });
});

Template.login.helpers({
});

Template.login.events({
  'submit .login': function(event) {
    event.preventDefault();
  }
});
