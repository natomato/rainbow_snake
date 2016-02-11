function Board (height, width) {
  this.height = height;
  this.width = width;
  this.grid = this.makeGrid(this.height, this.width);
};

//TODO: Make function private
Board.prototype.makeGrid = function makeGrid(height, width) {
  return [[0,0,0],[0,0,0],[0,0,0]];
}

Board.prototype.set = function set(coords, val) {
  return this.grid[coords.x][coords.y] = val;
}

Board.prototype.get = function get(coords) {
  return this.grid[coords.x][coords.y];
}

module.exports = Board;

