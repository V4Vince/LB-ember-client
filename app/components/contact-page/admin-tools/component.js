import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  //contact <-- action from contact-page/visior-view

  actions: {
    delete () {
      let id = this.get('contact.id');
      this.get('store').findRecord('contact', id)
      .then((contact) => {
        contact.destroyRecord();
      });
    }
  }
});
