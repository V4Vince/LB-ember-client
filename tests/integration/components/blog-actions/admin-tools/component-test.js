import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-actions/admin-tools', 'Integration | Component | blog actions/admin tools', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{blog-actions/admin-tools}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#blog-actions/admin-tools}}
      template block text
    {{/blog-actions/admin-tools}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
