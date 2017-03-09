import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['createdAt:desc'],
  sortedBlog: Ember.computed.sort('blogs', 'sortBy'),
  //editBlog
  //deleteBlog

  actions:{
    deleteBlog(blog){
      this.sendAction('deleteBlog', blog);
    },
    editBlog(blog){
      this.sendAction('editBlog', blog);
    },
  },
  //Attempted to use jQuery to animate list
  // didInsertElement: function() {
  //   this._super();
  //   Ember.run.scheduleOnce('afterRender', this, function() {
  //     Materialize.showStaggeredList('#blog-collection');
  //     console.log("YASSS");
  //   });
  // },

});
