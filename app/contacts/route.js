import Ember from 'ember';
import ResetScrollMixin from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {

  model () {
    return this.get('store').findAll('contact', {reload: true});
  },

  actions: {
    postContact (contactData) {
       let newContact = this.get('store').createRecord('contact', contactData);
       newContact.save()
      .then(() => {
        Materialize.toast("Contact saved successfully!", 4000);
      })
      .then(() => {
        console.log(contactData);
      })
      .catch(() => {
        //unloads the record from the store if save() fails.
        //This prevents any invalid records from being pushed into the store and viewable to user.
        this.get('store').unloadRecord(newContact);
        Materialize.toast("Error", 4000);
      });
    },

  },
});
