import Ember from 'ember';

export default Ember.Component.extend({
  //contactPath
  //isContactConfirmationShown: false,

  actions: {
    isContactConfirmationShown() {
      this.set('isContactConfirmationShown', true);
      this.set('isContactPathInputShown', false);
    },
  },
});
