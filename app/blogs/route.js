import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return this.get('store').findAll('blog');
  },

  actions: {
    like: function(){

    },
    postBlog: function(blogData){
      let newBlog = this.get('store').createRecord('blog', blogData);
      newBlog.save()
      .then(() => {
        console.log("SUCCESS " + blogData);
        //transition to single blog resource after success
      })
      .then(() => {
        Materialize.toast("Successfully saved new blog post!", 3000);
      })
      .catch(() => {
        //unloads the record from the store if save() fails.
        //This prevents any invalid records from being pushed into the store and viewable to user.
        this.get('store').unloadRecord(newBlog);
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
