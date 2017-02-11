import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  //contact <-- action from contact-page/visior-view

  actions: {
    delete () {
      let id = this.get('contact.id');
      //peekRecord won't make a server GET call
      let contact = this.get('store').peekRecord('contact', id);
      return contact.destroyRecord();
    },
  }
});
