import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('profile');
  },

  actions: {
    editAboutMe: function(aboutData){
      aboutData.save()
      .then(() => {
        Materialize.toast("Edit Success", 3000);
      })
      .catch(() => {
        Materialize.toast("Edit Failed", 3000);
      });
    },

  },
});
