import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-modal/contact-type-input', 'Integration | Component | input modal/contact type input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-modal/contact-type-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-modal/contact-type-input}}
      template block text
    {{/input-modal/contact-type-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
