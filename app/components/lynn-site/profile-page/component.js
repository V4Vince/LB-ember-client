import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  //profiles <-- collection from route
  //editAboutMe <-- action from route
  actions: {
    editAboutMe(profile){
      this.sendAction('editAboutMe', profile);
    },
  },
});
