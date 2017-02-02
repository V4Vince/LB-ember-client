import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lynn-site/profile-page', 'Integration | Component | lynn site/profile page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lynn-site/profile-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lynn-site/profile-page}}
      template block text
    {{/lynn-site/profile-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
