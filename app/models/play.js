import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  exact: attr('boolean'),
  playedAt: attr('date'),
  song: belongsTo('song')
});
