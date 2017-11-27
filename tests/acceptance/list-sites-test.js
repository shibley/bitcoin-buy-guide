import { test } from 'qunit';
import moduleForAcceptance from 'bitcoin-buy-guide/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list sites');

test('should show sites as the home page', function (assert) {
  visit('/');
andThen(function() {
  assert.equal(currentURL(), '/sites', 'should redirect automatically');
});
});

test('should link to information about the company.', function (assert) {
  visit('/');
click('a:contains("About")');
andThen(function() {
  assert.equal(currentURL(), '/about', 'should navigate to about');
});
});

test('should link to contact information.', function (assert) {
  visit('/');
click('a:contains("Contact")');
andThen(function() {
  assert.equal(currentURL(), '/contact', 'should navigate to contact');
});
});

test('should list available sites.', function (assert) {
  visit('/');
andThen(function() {
  assert.equal(find('.listing').length, 3, 'should see 3 sites');
});
});

// test('should filter the list of sites by country.', function (assert) {
// });
//
// test('should show details for a selected site', function (assert) {
// });
test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
