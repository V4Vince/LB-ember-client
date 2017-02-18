import Ember from 'ember';

export default Ember.Component.extend({
  isNewBlogFormOpen: false,
  toggleBlogPostForm: function (thingToToggle){
    if (this.get(thingToToggle)) {
      this.set(thingToToggle, false);
    } else {
      this.set(thingToToggle, true);
    }
  },

  actions: {
    showBlogPostForm: function (){
      this.toggleBlogPostForm('isNewBlogFormOpen');
    },
    closeModal: function(){
      this.set('isNewBlogFormOpen', false);
    },
  }
});
