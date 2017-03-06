import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  contactTypes: [
    {choice: 'A', type: 'Facebook'},
    {choice: 'B', type: 'Twitter'},
    {choice: 'C', type: 'Instagram'},
    {choice: 'D', type: 'Email'},
    {choice: 'E', type: 'Phone'},
  ],

  //postContact <- from contact route
  isContactPostForm: false,

  contactData: {},

  actions: {
    post(){
      this.sendAction('postContact', this.get('contactData'));
      this.set('isContactPostForm', false);
      console.log(this.get('contactData'));
      // this.set(this.get('contactData'), {});
      console.log(this.get('contactData'));
    },
    showContactPostForm (){
      this.set('isContactPostForm', true);
    },
    closeModal (){
      this.set('isContactPostForm', false);
    },
  },

});
