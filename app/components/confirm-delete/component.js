import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    confirmDelete(object){
      this.sendAction('deleteBlog', object);
      this.set('showConfirmation', false);
    },
    cancelDelete(){
      this.set('showConfirmation', false);
    }
  },
});
