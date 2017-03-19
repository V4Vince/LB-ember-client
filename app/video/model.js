import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  product price: DS.attr('string'),
  product pic: DS.attr('string'),

  //this formats the link to include embed instead of watch
  correctLink: Ember.computed('videoLink', function() {
    let link = this.get('videoLink').replace("watch?v=", "embed/");
    return link;
  })
});

//testing
