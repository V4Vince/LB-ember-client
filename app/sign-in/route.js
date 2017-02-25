import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => console.log("TRANSITIONS"))
      .then(() => this.transitionTo('application'))
      .then(() => {
        Materialize.toast("Hello, Lynn", 4000, 'green');
      })
      .catch(() => {
        Materialize.toast("Make sure your email and password are correct", 3000, 'red');
      });
    },
  },
});
