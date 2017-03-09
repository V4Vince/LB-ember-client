import Ember from 'ember';
import ResetScrollMixin from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
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
