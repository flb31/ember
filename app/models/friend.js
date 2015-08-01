import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  articles: DS.hasMany('article'),
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  fullName: Ember.computed('first_name', 'last_name', function() {
	return this.get('first_name') + ' ' + this.get('last_name'); 
  })
});
