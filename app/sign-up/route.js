import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
      .then(() => this.get('auth').signIn(credentials))
      .then(() => this.transitionTo('application'))
      .then(() => {
        Materialize.toast("Sign-up Success!", 2500);
      })
      .catch(() => {
        Materialize.toast("Sign-up Failed", 3000, 'red');
      });
    },
  },
});
