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
       let newContact = this.get('store').createRecord('contact', this.get('contactData'));
       newContact.save()
      .then(() => {
        Materialize.toast("Contact saved successfully!", 4000);
      })
      .catch(() => {
        //unloads the record from the store if save() fails.
        //This prevents any invalid records from being pushed into the store and viewable to user.
        this.get('store').unloadRecord(newContact);
        Materialize.toast("Error", 4000);
      });
    },
  }
});

//To Do:
//Revise app to reflect convention of data down, action up.
//This means move all actions into routes and all data processing into components.
