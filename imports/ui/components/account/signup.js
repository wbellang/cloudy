import './signup.html';

Template.signup.onCreated(function() {
});

Template.signup.onRendered(function() {
  let template = Template.instance();

  $("#sign-up").validate({
    rules: {
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      email: {
        required: true,
        validateEmail: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      firstName: {
        required: 'First Name is required.'
      },
      lastName: {
        required: 'Last Name is required.'
      },
      email: {
        required: 'Email is required.',
        validateEmail: 'Email is invalid.'
      },
      password: {
        required: 'Password is required.',
        minlength: 'Use at least 6 characters, please.'
      }
    },
    submitHandler() {
      let firstName = template.find("[name='firstName']").value;
      let lastName = template.find("[name='lastName']").value;
      let email = template.find("[name='email']").value;
      let password = template.find("[name='password']").value;

      Accounts.createUser({ email, password, profile: {firstName, lastName} }, (err) => {
        if (err) {
          console.log('Unable to create account', err);
          Bert.alert(err.reason, 'danger', 'fixed-top');
        } else {
          console.log('Account created successfully', Meteor.user())
          FlowRouter.go('login');
        }
      });
    }
  });
});

Template.signup.helpers({
});

Template.signup.events({
  'submit .signup': function(event) {
    event.preventDefault();
  }
});
