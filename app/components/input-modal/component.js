import Ember from 'ember';

export default Ember.Component.extend({
  //contactData <--from new-button
  //"addContact" <-- new-button
  //showNewContactForm <--new-button
  //"closeModal"
  isContactTypeInputShown: true,
  isContactPathInputShown: false,
  isContactConfirmationShown: false,

  resetForm: function (formName) {
    this.set('contactData', {});
    this.set(formName, false);
  },

  actions: {
    closeModal() {
      this.resetForm('showNewContactForm'
      );
    },
    submit () {
      let contactData = this.get('contactData')
      this.sendAction('addContact', contactData);
      this.resetForm('showNewContactForm');

    },
  },
});
