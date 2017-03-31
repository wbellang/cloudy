// Methods related to Cloud Objects

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CloudObjectDefinitions } from './cloud-object-definitions.js';

Meteor.methods({
  'cloudObjectDefinitions.insert'(name, url) {
    check(name, String);
    check(url, String);

    return CloudObjectDefinitions.insert({
      name,
      url,
      createdAt: new Date(),
    });
  },
});
