import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  Materialize: Ember.inject.service(),
  //profile

  profileParams: {},

  aboutModalIsOpen: false,

  actions: {
    editAboutModal () {
      this.set('aboutModalIsOpen', true);
      this.set('profileParams.aboutMe', this.get('aboutMe'));
    },
    update () {
      let updatedAboutMe = this.get('profileParams.aboutMe');
      let id = this.get('profile.id'); this.get('store').findRecord('profile', id)
        .then((profile) => {
          profile.set('aboutMe', updatedAboutMe);
          return profile;
        })
        .then((profile) => profile.save())
        .then(() => Materialize.toast("Updated about me", 4000))
        .catch(() => {
          Materialize.toast("Failed to update about me!", 4000);
        });
    },

  }
});
