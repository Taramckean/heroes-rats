const assert = require('assert');
const Food = require('../models/food.js');

describe('foods', function () {

  let food;

  beforeEach(function () {
    food1 = new Food("Broccoli", 50);
  });

  it('food has name', function() {
  assert.deepStrictEqual(food1.name, "Broccoli");
  });

  it('food has replenishment value', function() {
  assert.deepStrictEqual(food1.value, 50);
  });

  it('food has poisoned???', function() {
    assert.deepStrictEqual(food1.poisoned, false);
  });

});
