import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['createdAt:desc'],
  sortedBlog: Ember.computed.sort('blogs', 'sortBy'),
  
});
