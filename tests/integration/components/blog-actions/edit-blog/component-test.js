import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-actions/edit-blog', 'Integration | Component | blog actions/edit blog', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{blog-actions/edit-blog}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#blog-actions/edit-blog}}
      template block text
    {{/blog-actions/edit-blog}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
