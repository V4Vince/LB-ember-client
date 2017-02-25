import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group', 'input-fields'],

  profile: {},

  actions: {
    update (profile) {
      this.sendAction('editAboutMe', profile);
      this.set('aboutModalIsOpen', false);
    },
    closeModal () {
      this.set('aboutModalIsOpen', false);
    },
  },

});
