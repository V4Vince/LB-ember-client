import Ember from 'ember';
import ResetScrollMixin from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  model (params) {
    return this.get('store').findRecord('profile', params.profile_id);
  },


});
