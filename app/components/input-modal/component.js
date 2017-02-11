import Ember from 'ember';

export default Ember.Component.extend({
  //contactData <--from new-button
  //"addContact" <-- new-button
  //showNewContactForm <--new-button
  //"closeModal"
  isContactPathInputShown: false,


  actions: {
    closeModal() {
      this.set('contactData', {});
      this.set('showNewContactForm', false);
    },
    submit () {
      let contactData = this.get('contactData')
      this.sendAction('addContact', contactData);
    },
  }
});
