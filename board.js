function Board (height, width) {
  this.height = height;
  this.width = width;
  this.grid = this.makeGrid(this.height, this.width);
};

Board.prototype.makeGrid = function makeGrid(height, width) {
  return [[0,0,0],[0,0,0],[0,0,0]];
}

module.exports.Board;

