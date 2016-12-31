import Ember from 'ember';

export default Ember.Component.extend({
  aboutModalIsOpen: false,

  actions: {
    editAboutModal () {
      this.set('aboutModalIsOpen', true);
    },
    closeModal () {
      this.set('aboutModalIsOpen', false);
    }
  }
});
