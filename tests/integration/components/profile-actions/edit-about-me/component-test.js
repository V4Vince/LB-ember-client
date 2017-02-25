import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-actions/edit-about-me', 'Integration | Component | profile actions/edit about me', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile-actions/edit-about-me}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#profile-actions/edit-about-me}}
      template block text
    {{/profile-actions/edit-about-me}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
