import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  //blog <- from blog route
  //editBlog <- from blog route
  //deleteBlog <- from blog route
  actions: {
    edit(){

      this.sendAction('editBlog');
    },
    delete(blog){
      this.sendAction('deleteBlog', blog);
    },
    like(){
      //maybe use a facebook like action
    },
  }
});
