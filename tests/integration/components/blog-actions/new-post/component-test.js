import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-actions/new-post', 'Integration | Component | blog actions/new post', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{blog-actions/new-post}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#blog-actions/new-post}}
      template block text
    {{/blog-actions/new-post}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
