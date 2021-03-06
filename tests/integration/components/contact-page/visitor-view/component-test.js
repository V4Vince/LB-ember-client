import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contact-page/visitor-view', 'Integration | Component | contact page/visitor view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contact-page/visitor-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#contact-page/visitor-view}}
      template block text
    {{/contact-page/visitor-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
