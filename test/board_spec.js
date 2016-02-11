var assert = require('assert');
var Board = require('../board');

function setup(height, width) {
  var h = height || 3;
  var w = width || 3;
  return new Board(h, w);
}

describe('The Game Board', function () {
  it('should have a height and width property', function () {
    var board = setup(3, 5);
    assert.equal(board.height, 3);
    assert.equal(board.width, 5);
  });

  describe('getter/setter methods', function () {
    it('should store an object at a location', function () {
      var board = setup(3, 5);
      var orc = {name: 'Orc'};
      var coord = {x:1, y:1};
      board.set(coord, orc)
      assert.equal(board.get(coord), orc);
    });
  });
});