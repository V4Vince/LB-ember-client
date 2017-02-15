import Ember from 'ember';

export default Ember.Component.extend({
//submit <--from input-modal
  actions: {
    submit(){
      this.sendAction('submit');
    },
  },
});
