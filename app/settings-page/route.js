import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  //Checks to see if user is authenticated before granting access
  //If not, redirects to sign-in
  beforeModel(){
    let isAuth = this.get('auth').get('isAuthenticated');
    if (!isAuth) {
      console.log(isAuth);
      this.transitionTo('sign-in')
      .then(() => {
        Materialize.toast("Please sign in to access your seetings", 4000, 'red');
      })
      .catch(() => {
        Materialize.toast("Something went wrong", 4000, 'red');
      });
    }
  },

  //Returns 2+ models
  model() {
    return Ember.RSVP.hash({
      profile: this.store.findAll('profile'),
      contacts: this.store.findAll('contact'),
    });
  },

  //Settings controller with the diifferent models
  setupController(controller, models) {
    // controller.set('blogs', models.blogs);
    // controller.set('profile', models.profile);
    // controller.set('contacts', models.contacts);

    // same thing as above but cleaner
    controller.setProperties(models);
  },

  actions: {
    changeBasicInfo: function(profile){
      profile.save()
      // console.log(basicInfo)
      .then(() => {
        Materialize.toast("Basic info updated successfully", 3000, 'green');
      })
      .catch(() => {
        Materialize.toast("Update basic info failed", 3000, 'red');
      });
    },

    changePassword (passwords) {
      this.get('auth').changePassword(passwords)
      .then(() => this.get('auth').signOut())
      .then(() => this.transitionTo('sign-in'))
      .then(() => {
        Materialize.toast("Password changed successfully!", 4000, 'green');
      })
      .catch(() => {
        Materialize.toast("Make sure you enter your current password correctly", 4000, 'red');
      });
    },

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
  },

});
