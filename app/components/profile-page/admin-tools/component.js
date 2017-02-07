import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  //profile

  profileParams: {},

  aboutModalIsOpen: false,

  actions: {
    editAboutModal () {
      this.set('aboutModalIsOpen', true);
    },
    update () {
      let updatedAboutMe = this.get('profileParams.aboutMe');
      let id = this.get('profile.id'); this.get('store').findRecord('profile', id)
        .then((profile) => {
          profile.set('aboutMe', updatedAboutMe);
          return profile;
        })
        .then((profile) => profile.save());
    },

  }
});
