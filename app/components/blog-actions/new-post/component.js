import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  //postBlog <- from blog route

  blogData: {},

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
    post: function(){
      let data = this.get('blogData');
      console.log(data);
      this.sendAction('postBlog', this.get('blogData'));
      this.toggleBlogPostForm('isNewBlogFormOpen');
    },
    closeModal: function(){
      this.set('isNewBlogFormOpen', false);
    },
  }
});
