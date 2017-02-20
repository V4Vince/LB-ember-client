import Ember from 'ember';

export default Ember.Component.extend({

blog: {},

actions:{
  edit(blog) {
    this.sendAction('editBlog', blog);
    this.set('isEditBlogFormOpen', false);
  },
  closeModal(){
    this.set('isEditBlogFormOpen', false);
  },
}
});

//To Do: after editing a blog post, date and time of edit should be shown
