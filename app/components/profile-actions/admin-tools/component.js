import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  //editAboutMe
  //profile

  aboutModalIsOpen: false,

    actions: {
      showAboutModal () {
        this.set('aboutModalIsOpen', true);
      },
      editAboutMe (profile){
        this.sendAction('editAboutMe', profile);
      },
    }
});
