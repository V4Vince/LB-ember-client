import Ember from 'ember';

export default Ember.Component.extend({
  isChangePwShown: false,
  isChangeBasicInfoShown: false,

  actions: {
    showChangePw(){
      this.set('isChangePwShown', true);
      console.log(this.get('isChangePwShown'));
    },
    changePw(passwords){
      this.sendAction('changePw', passwords);
    },
    showUpdateBasicInfo(){
      this.set('isChangeBasicInfoShown', true);
    },
    updateBasicInfo(basicInfo){
      this.sendAction('updateBasicInfo', basicInfo);
    },
    logOut(){
      this.sendAction('logOut');
    }
  },
});
