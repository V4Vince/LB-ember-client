import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    post(data){
      this.sendAction('post', data);
      console.log(data);
    }
  }
});
