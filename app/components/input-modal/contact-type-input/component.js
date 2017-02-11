import Ember from 'ember';

export default Ember.Component.extend({
  //contactType <-- from input-modal
  //isContactPathInputShown <--from input modal,

  actions: {
    showContactPathInput(){
      this.set('isContactPathInputShown', true);
      this.set('isContactTypeInputShown', false);
    },
  }
});
