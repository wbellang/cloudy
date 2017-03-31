// All links-related publications

import { Meteor } from 'meteor/meteor';
import { CloudObjects } from '../cloud-objects.js';

Meteor.publish('cloudObjects.all', function () {
  return CloudObjects.find();
});
