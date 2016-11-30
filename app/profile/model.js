import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  birthday: DS.attr('date'),
  aboutMe: DS.attr('string'),
  extra1: DS.attr('string'),
  extra2: DS.attr('string'),
  extra3: DS.attr('string'),
  extra4: DS.attr('string'),
  extra5: DS.attr('string')
});
