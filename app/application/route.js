import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signOut () {
      this.get('auth').signOut()
      .then(() => this.transitionTo('application'))
      .then(() => {
        Materialize.toast("You have been signed out", 3000);
      })
      .catch(() => {
        Materialize.toast("There was a problem. Make sure you are already signed in.", 3000, 'red');
      });
      this.store.unloadAll();
    },
    error (reason) {
      let unauthorized = reason.errors.some((error) =>
        error.status === '401'
      );

      if (unauthorized) {
        this.get('flashMessages')
        .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      }

      return false;
    },
  },
});
