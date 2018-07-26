const assert = require('assert');
const Rat = require('../models/rats.js');
const Food = require('../models/food.js');

describe('rats', function () {

  let rat, food1;

  beforeEach(function () {
    food1 = new Food("Carrot", 50);
    rat = new Rat();
  });

  it('rat shits on food', function() {
    rat.touch(food1);
    assert.deepStrictEqual(food1.poisoned, true);
  });

});
