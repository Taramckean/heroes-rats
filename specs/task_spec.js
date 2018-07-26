const assert = require('assert');
const Task = require('../models/tasks.js');

describe('tasks', function(){
  let task;

  beforeEach(function(){
    task = new Task(10, 15, 3);
  });

  it('task has a difficulty level', function() {
    assert.deepStrictEqual(task.difficulty, 10);
  });

  it('task has urgency', function() {
    assert.deepStrictEqual(task.urgency, 15);
  });

  it('task has reward', function() {
  assert.deepStrictEqual(task.reward, 3);
  });

  it('task is not completed at first', function() {
    assert.deepStrictEqual(task.completed, false);
  });

  it('task can be completed', function() {
    task.complete();
    assert.deepStrictEqual(task.completed, true);
  });


})
