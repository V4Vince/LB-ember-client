import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('settings-action/update-basic-info', 'Integration | Component | settings action/update basic info', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{settings-action/update-basic-info}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#settings-action/update-basic-info}}
      template block text
    {{/settings-action/update-basic-info}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
