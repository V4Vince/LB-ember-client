import Ember from 'ember';

export default Ember.Component.extend({
  //profile <- from profile-page/admin-view
  //aboutModalIsOpen <- from profile-page/admin-view

  actions: {
    closeModal () {
      this.set('aboutModalIsOpen', false);
    },
  }
});
