import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-actions/admin-tools', 'Integration | Component | profile actions/admin tools', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile-actions/admin-tools}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#profile-actions/admin-tools}}
      template block text
    {{/profile-actions/admin-tools}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
