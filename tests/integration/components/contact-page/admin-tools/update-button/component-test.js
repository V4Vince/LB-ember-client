import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contact-page/admin-tools/update-button', 'Integration | Component | contact page/admin tools/update button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contact-page/admin-tools/update-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#contact-page/admin-tools/update-button}}
      template block text
    {{/contact-page/admin-tools/update-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
