import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-page/admin-tools', 'Integration | Component | profile page/admin tools', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile-page/admin-tools}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#profile-page/admin-tools}}
      template block text
    {{/profile-page/admin-tools}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
