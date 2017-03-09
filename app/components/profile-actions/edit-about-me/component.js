import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  profile: {},

  actions: {
    update (profile) {
      this.sendAction('editAboutMe', profile);
      console.log(profile);
      this.set('aboutModalIsOpen', false);
    },
    closeModal () {
      this.set('aboutModalIsOpen', false);
    },

  },
});
