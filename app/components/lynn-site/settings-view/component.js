import Ember from 'ember';

export default Ember.Component.extend({
  isChangePwShown: false,

  actions: {
    showChangePw(){
      this.set('isChangePwShown', true);
      console.log(this.get('isChangePwShown'));
    },

    changePw(passwords){
      this.sendAction('changePw', passwords);
    },

    logOut(){
      this.sendAction('logOut');
    }
  },
});
