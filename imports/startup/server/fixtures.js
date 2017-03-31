// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { CloudObjectDefinitions } from '../../api/cloud/cloud-object-definitions.js';

Meteor.startup(() => {
  // if the Cloud Obejct Definitions collection is empty
  if (CloudObjectDefinitions.find().count() === 0) {
    const data = Meteor.settings.cloudObjectDefinitions;
    data.forEach(cloudObjectDef => CloudObjectDefinitions.insert({
      "name": cloudObjectDef.name,
      "url": cloudObjectDef.url,
      createdAt: new Date()
    }));
  }
});
