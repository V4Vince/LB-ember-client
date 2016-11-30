import DS from 'ember-data';

export default DS.Model.extend({
  contactType: DS.attr('string'),
  contactPath: DS.attr('string')
});
