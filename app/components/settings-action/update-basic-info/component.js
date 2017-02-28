import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  profile: {},



  actions: {
    updateBasicInfo(){
      this.sendAction('updateBasicInfo', this.get('profile'));
      this.set('isChangeBasicInfoShown', false);
      console.log("THIS IS BASIC " + this.get('basicInfo'));
    },
    cancel(){
      this.set('isChangeBasicInfoShown', false);
    },
  }
});
