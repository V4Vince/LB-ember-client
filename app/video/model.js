import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  videoLink: DS.attr('string'),
  description: DS.attr('string'),


  //this formats the link to include embed instead of watch
  correctLink: Ember.computed('videoLink', function() {
    let link = this.get('videoLink').replace("watch?v=", "embed/");
    return link;
  })
});
