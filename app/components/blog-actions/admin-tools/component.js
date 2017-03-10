import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  //blog <- from lynn-site/blog-list
  //editBlog <- from lynn-site/blog-list
  //deleteBlog <- from lynn-site/blog-list
  showConfirmation: false,
  isEditBlogFormOpen: false,

  actions: {
    edit(){
      this.set('isEditBlogFormOpen', true);
    },
    editBlog(blog){
      this.sendAction('editBlog', blog);
    },
    //Passes the delete confirmation from the confirmation modal
    deleteBlog(blog){
      this.sendAction('deleteBlog', blog);
    },
    //Show delete confirmation
    delete(){
      this.set('showConfirmation', true);
    },
    like(){
      //maybe use a facebook like action
    },
  }
});
