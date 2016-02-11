var _ = require('lodash');

function initialize(height, width) {
  return _(height).times(function () {
    return _(width).times(function () {
      return 0;
    });
  });
}

function Board (height, width) {
  var grid = initialize(height, width);
  this.height = height;
  this.width = width;

  this.get = function get(coords) {
    return grid[coords.x][coords.y];
  };

  this.set = function set(coords, val) {
    return grid[coords.x][coords.y] = val;
  };
};


module.exports = Board;
