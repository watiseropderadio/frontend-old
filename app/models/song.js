import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  title: attr('string', { defaultValue: 'No default title yet' }),
  plays: hasMany('play')
});
