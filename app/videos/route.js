import Ember from 'ember';

export default Ember.Route.extend({

  model (){
    return this.get('store').findAll('video');
  },

  actions: {
    postVideo(data){
      let newVideo = this.get('store').createRecord('video', data);
      console.log("ROUTE");
      console.log(data);
      newVideo.save()
      .then(() => {
        console.log("Success");
      })
      .catch(() => {
        console.log("Error");
      });
    }
  },
});
