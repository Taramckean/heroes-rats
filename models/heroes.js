const _ = require('lodash');

const Hero = function (name, favouriteFood) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.talk = function() {
  return "Ise mise " + this.name;
}

Hero.prototype.eat = function(food) {
  let value = 0;
  if (food.name === this.favouriteFood) {
    value = food.value * 1.5;
  } else {
    value = food.value;
  }
  if (food.poisoned) {
    this.health += (value * -1);
  } else {
    this.health += value;
  }
}

Hero.prototype.addTask = function(task) {
 this.tasks.push(task);
}

Hero.prototype.sortByProperty = function(property) {
  let results = _.sortBy(this.tasks, property);
  return _(results).reverse().value();
}

Hero.prototype.filterByCompleted = function(boolean) {
  return _.filter(this.tasks, {"completed": boolean});
};

module.exports = Hero;
