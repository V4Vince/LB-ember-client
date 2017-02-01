import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    this.find('store').findRecord('profile', params.profile_id);
  },
});
