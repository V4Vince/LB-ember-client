import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contact-actions/new-contact', 'Integration | Component | contact actions/new contact', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contact-actions/new-contact}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#contact-actions/new-contact}}
      template block text
    {{/contact-actions/new-contact}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
