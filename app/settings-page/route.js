import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  beforeModel(){
    let isAuth = this.get('auth').get('isAuthenticated');
    if (!isAuth) {
      console.log(isAuth);
      this.transitionTo('sign-in')
      .then(() => {
        Materialize.toast("Please sign in to access your seetings", 4000);
      })
      .catch(() => {
        Materialize.toast("Error", 4000);
      });
    }
  },

  model() {
    return Ember.RSVP.hash({
      profile: this.store.findAll('profile'),
      contacts: this.store.findAll('contact'),
    });
  },

  setupController(controller, models) {
    // controller.set('blogs', models.blogs);
    // controller.set('profile', models.profile);
    // controller.set('contacts', models.contacts);

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
        Materialize.toast("Password changed successfully!", 4000);
      })
      .catch(() => {
        Materialize.toast("Error", 4000);
      });
    },
  },

});
