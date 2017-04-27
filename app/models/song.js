import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  slug: attr('string'),
  title: attr('string'),
  plays: hasMany('play'),
  artists: hasMany('artist')
});
