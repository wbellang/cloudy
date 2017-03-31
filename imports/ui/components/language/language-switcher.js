import './language-switcher.html';

Template.language_switcher.helpers({
});


Template.language_switcher.events({
  'click .flag-icon': function(event) {
    const language = event.target.getAttribute('data-flag');
    const currentLanguageCode = TAPi18n.getLanguage();
    if (currentLanguageCode !== language) {
      TAPi18n.setLanguage(language);
    }
  }
});
