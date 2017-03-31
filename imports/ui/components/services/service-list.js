import { CloudObjects } from '/imports/api/cloud/cloud-objects.js';
import { Meteor } from 'meteor/meteor';

import './service-list.html';

Template.service_list.onCreated(function () {
  Meteor.subscribe('cloudObjects.all');
});

Template.service_list.helpers({
  cloudObjects() {
    return CloudObjects.find({});
  }
});

// Template.service_list.events({
//   'submit .info-link-add'(event) {
//     event.preventDefault();
//
//     const target = event.target;
//     const title = target.title;
//     const url = target.url;
//
//     Meteor.call('links.insert', title.value, url.value, (error) => {
//       if (error) {
//         alert(error.error);
//       } else {
//         title.value = '';
//         url.value = '';
//       }
//     });
//   },
// });
