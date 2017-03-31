// All cloud-related publications

import { Meteor } from 'meteor/meteor';
import { CloudObjects } from '../cloud-objects.js';
import { CloudObjectDefinitions } from '../cloud-object-definitions.js';

Meteor.publish('cloudObjectDefinitions.all', function () {
  return CloudObjectDefinitions.find();
});
