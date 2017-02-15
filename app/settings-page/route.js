import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      profile: this.store.findAll('profile'),
      contacts: this.store.findAll('contact'),
    });
  },

setupController(controller, models) {
  // controller.set('posts', models.posts);
  // controller.set('tags', models.tags);
  // controller.set('categories', models.categories);
  // controller.set('weather', models.weather);

  // same thing as above but cleaner
  controller.setProperties(models);
},

actions: {
  changePassword (passwords) {
    this.get('auth').changePassword(passwords)
    .then(() => this.get('auth').signOut())
    .then(() => this.transitionTo('sign-in'))
    .then(() => {
      this.get('flashMessages')
      .success('Successfully changed your password!');
    })
    .then(() => {
      this.get('flashMessages').warning('You have been signed out.');
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.');
    });
  },
},
});
