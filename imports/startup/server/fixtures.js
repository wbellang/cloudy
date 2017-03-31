// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { CloudObjects } from '../../api/cloud/cloud-objects.js';

Meteor.startup(() => {
  // if the Cloud Obejcts collection is empty
  if (CloudObjects.find().count() === 0) {
    const data = Meteor.settings.cloudObject;
    data.forEach(cloudObj => CloudObjects.insert({
      "name": cloudObj.name,
      "url": cloudObj.url,
      createdAt: new Date()
    }));
  }
});
