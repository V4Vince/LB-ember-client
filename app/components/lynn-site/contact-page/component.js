import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

// To Do: Add observer (maybe) to contacts. If there are no contacts, then display a prompt asking user to enter contact info.
});
