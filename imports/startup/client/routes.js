import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/account/account.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/manage-services/manage-services.js';

// ******************* JUST SOME FUNCTIONS *****************************

function redirectIfLoggedIn (ctx, redirect) {
  if (Meteor.userId()) {
    redirect('/')
  }
}

function checkLoggedIn (ctx, redirect) {
  if (!Meteor.userId() && !Meteor.loggingIn()) {
    redirect('/login')
  }
}

// ************************* EXPOSED ROUTES ********************************
const exposedRoutes = FlowRouter.group({
  name: 'exposed',
  triggersEnter: [ redirectIfLoggedIn ]
});

exposedRoutes.route('/login',  {
  name: 'login',
  action() {
    BlazeLayout.render('account', { main: 'login' });
  }
});

exposedRoutes.route('/signup',  {
  name: 'signup',
  action() {
    BlazeLayout.render('account', { main: 'signup' });
  }
});

// ************************* LOGGED IN ROUTES ********************************
const loggedInRoutes = FlowRouter.group({
  name: 'loggedIn',
  triggersEnter: [ checkLoggedIn ]
});

loggedInRoutes.route('/',  {
  name: 'home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  }
});

loggedInRoutes.route('/services',  {
  name: 'manageServices',
  action() {
    BlazeLayout.render('App_body', { main: 'manage_services' });
  }
});

loggedInRoutes.route('/logout',  {
  name: 'logout',
  action() {
    Meteor.logout(() => {
      console.log('Good bye!');
      FlowRouter.go('home');
    });
  }
});
// // Set up all routes in the app
// FlowRouter.route('/', {
//   name: 'App.home',
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_home' });
//   },
// });
//
// FlowRouter.route('/services', {
//   name: 'App.home',
//   action() {
//     BlazeLayout.render('App_body', { main: 'manage_services' });
//   },
// });
//
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  }
};
