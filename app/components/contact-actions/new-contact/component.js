import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  contactTypes: [
    {choice: 'A', type: 'Facebook'},
    {choice: 'B', type: 'Twitter'},
    {choice: 'C', type: 'Instagram'},
    {choice: 'D', type: 'Email'},
    {choice: 'E', type: 'Phone'},
  ],


});
