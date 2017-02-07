import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lynn-site/contact-page', 'Integration | Component | lynn site/contact page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lynn-site/contact-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lynn-site/contact-page}}
      template block text
    {{/lynn-site/contact-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
