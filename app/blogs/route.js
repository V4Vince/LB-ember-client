import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('blog');
  },
  actions: {
    editBlog: function (){
      //edit the blog
    },

    deleteBlog: function(){
      //delete the blog
    },
  }
});
