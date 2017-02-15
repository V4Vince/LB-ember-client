import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-modal/contact-confirmation', 'Integration | Component | input modal/contact confirmation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-modal/contact-confirmation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-modal/contact-confirmation}}
      template block text
    {{/input-modal/contact-confirmation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
