const assert = require('assert');
const Hero = require('../models/heroes.js');
const Rat = require('../models/rats.js');
const Task = require('../models/tasks.js');
const Food = require('../models/food.js');

describe('heroes', function () {

  let hero, task1, task2, task3, food1, food2, rat;

  beforeEach(function () {
    hero = new Hero("Robert Bruce", "Haggis");
    food1 = new Food("Haggis", 100);
    food2 = new Food("neeps", 75);
    task1 = new Task(10, 4, 1);
    task2 = new Task(15, 10, 2);
    task3 = new Task(5, 5, 5);
    rat = new Rat();
  });

  it('hero has a name', function() {
    assert.deepStrictEqual(hero.name, "Robert Bruce");
  });

  it('hero has health', function() {
    assert.deepStrictEqual(hero.health, 100);
  });

  it('hero has favourite food', function() {
    assert.deepStrictEqual(hero.favouriteFood, "Haggis");
  });

  it('hero can talk', function() {
    let expected = "Ise mise Robert Bruce";
    assert.deepStrictEqual(hero.talk(), expected);
  });

  it('hero has empty tasks', function() {
    assert.deepStrictEqual(hero.tasks, []);
  });

  it('hero can add tasks', function() {
    hero.addTask(task1);
    assert.deepStrictEqual(hero.tasks.length, 1);
  });

  it('hero can eat food', function() {
    hero.eat(food2);
    assert.deepStrictEqual(hero.health, 175);
  });

  it('hero eats favourite food', function() {
    hero.eat(food1);
    assert.deepStrictEqual(hero.health, 250);
  });

  it('hero can sort tasks by property', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    let expected1 = [task2, task1, task3];
    let expected2 = [task2, task3, task1];
    let expected3 = [task3, task2, task1];
    assert.deepStrictEqual(hero.sortByProperty("difficulty"), expected1);
    assert.deepStrictEqual(hero.sortByProperty("urgency"), expected2);
    assert.deepStrictEqual(hero.sortByProperty("reward"), expected3);
  });

  it('hero can view tasks that are not completed', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    task1.complete();
    let expected = [task2, task3];
    assert.deepStrictEqual(hero.filterByCompleted(false), expected);
  });

  it('hero can view tasks that are completed', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    task1.complete();
    let expected = [task1];
    assert.deepStrictEqual(hero.filterByCompleted(true), expected);
  });

  it('heros health goes down after eating poisoned food', function() {
    rat.touch(food1);
    hero.eat(food1);
    let expected = -50;
    assert.deepStrictEqual(hero.health, expected);
  });

});
