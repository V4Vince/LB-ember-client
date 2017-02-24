import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('users');
  this.route('blogs', { path: '/my-blog'});
  this.route('contacts', { path: '/contact-me'});
  this.route('profile', { path: '/about-me'});
  this.route('profile-single', { path: '/bio-edit/:profile_id'});
  this.route('settings-page', {path: '/settings'});
  this.route('not-found', {path: '/*path'});
});

export default Router;
