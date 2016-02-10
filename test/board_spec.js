var assert = require('assert');
var Game = require('../board');

describe('The Game Board', function () {
  it('should have a height and width property', function () {
    var board = new Game.Board(3, 5);
    assert.equal(board.height, 3);
    assert.equal(board.width, 5);
  });
});