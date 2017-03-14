import Ember from 'ember';

export default Ember.Component.extend({


actions: {
  scrollUp(){
    Ember.$('html, body').animate({
      scrollTop: $("#main-navbar").offset().top
    }, 1000);
  },
},

});

// Attempted to use jQuery to animate list
// didInsertElement: function() {
//   this._super();
//   Ember.run.scheduleOnce('afterRender', this, function() {
//     Materialize.showStaggeredList('#blog-collection');
//     console.log("YASSS");
//   });
// },
