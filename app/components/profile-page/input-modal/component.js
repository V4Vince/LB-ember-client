import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group', 'input-fields'],

  //aboutMe <- from profile-page/admin-tools
  //aboutModalIsOpen <- from profile-page/admin-tools
  //update <-- from profile-page/admin-tools

  actions: {

    closeModal () {
      this.set('aboutModalIsOpen', false);
    },
    update () {
      this.sendAction('update');
      this.set('aboutModalIsOpen', false);
    },
  }
});
