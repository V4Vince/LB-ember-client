import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  data: {},

  actions: {
    postForm(){
      this.set('showForm', true);
    },
    post(){
      this.sendAction("post", this.get('data'));
      this.set('showForm', false);
      console.log(this.get('data'));
    },
  }
});
