import Ember from 'ember';

export default Ember.Component.extend({
  //profile <- from profile model


  aboutModalIsOpen: false,

  actions: {
    editAboutModal () {
      this.set('aboutModalIsOpen', true);
    },
  }
});
