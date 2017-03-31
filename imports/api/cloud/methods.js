// Methods related to Cloud Objects

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CloudObjects } from './cloud-objects.js';

Meteor.methods({
  'cloudObjects.insert'(name, url) {
    check(name, String);
    check(url, String);

    return CloudObjects.insert({
      name,
      url,
      createdAt: new Date(),
    });
  },
});
