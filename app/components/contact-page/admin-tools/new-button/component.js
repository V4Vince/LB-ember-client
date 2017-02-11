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
        //this will update the store with the newly created record. Otherwise ID will be NULL
        this.get('store').push(contact);
      });
    },
  }
});
