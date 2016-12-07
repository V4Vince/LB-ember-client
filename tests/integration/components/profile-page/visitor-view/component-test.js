import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-page/visitor-view', 'Integration | Component | profile page/visitor view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile-page/visitor-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#profile-page/visitor-view}}
      template block text
    {{/profile-page/visitor-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
