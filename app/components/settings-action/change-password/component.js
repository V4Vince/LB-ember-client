import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  passwords: {},

  actions: {
    changePw () {
      this.sendAction('changePw', this.get('passwords'));
    },

    cancel () {
      this.set('passwords', {});
      this.set('isChangePwShown', false);
    },
  },
});
