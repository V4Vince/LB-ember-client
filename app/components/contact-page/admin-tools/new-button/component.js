import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  //contact <-- action from contact-page/visior-view
  showNewContactForm: false,
  contactData: {},

  actions: {
    showContactForm () {
      this.set('showNewContactForm', true);
    },

    addContact () {
      let contact = this.get('store').createRecord('contact', this.get('contactData'));
      return contact.save()
      .then((contact) => {
        console.log(contact);
      });
    },
  }
});
