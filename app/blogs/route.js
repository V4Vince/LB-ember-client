import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return this.get('store').findAll('blog');
  },

  actions: {
    like: function(){

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
