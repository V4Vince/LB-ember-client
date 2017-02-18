import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return this.get('store').findAll('blog');
  },

  actions: {
    like: function(){

    },
    postBlog: function(blogData){
      this.get('store').createRecord('blog', blogData).save()
      .then(() => {
        console.log("SUCCESS " + blogData);
        //transition to single blog resource after success
      })
      .then(() => {
        Materialize.toast("Successfully saved new blog post!", 3000);
      })
      .catch(() => {
        Materialize.toast('Oops! Failed to save new post', 3000);
      });

    },
    editBlog: function (){
      console.log("TESTINGGG");
    },
    deleteBlog: function(blog){
      blog.destroyRecord()
      .then(() => {
        Materialize.toast("Blog post deleted successfully", 3000);
      })
      .catch(() => {
        Materialize.toast('Oops! Somehting went wrong', 3000);
      });
    },

  }
});
