import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  //blog <- from lynn-site/blog-list
  //editBlog <- from lynn-site/blog-list
  //deleteBlog <- from lynn-site/blog-list

  isEditBlogFormOpen: false,

  actions: {
    edit(){
      this.set('isEditBlogFormOpen', true);
    },
    editBlog(blog){
      this.sendAction('editBlog', blog);
    },
    delete(blog){
      this.sendAction('deleteBlog', blog);
    },
    like(){
      //maybe use a facebook like action
    },
  }
});
