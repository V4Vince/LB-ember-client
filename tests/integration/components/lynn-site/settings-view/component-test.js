import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lynn-site/settings-view', 'Integration | Component | lynn site/settings view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lynn-site/settings-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lynn-site/settings-view}}
      template block text
    {{/lynn-site/settings-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
