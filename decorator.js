const { runInNewContext } = require("vm");

const Decorator = function(room){
    this.room = room;
    this.paintStock = [];
    
};
 Decorator.prototype.paintRoom = function(room){
     this.room.painted = true;
     return room.painted
 };

 Decorator.prototype.paintStockAmount = function () {
    return this.decorator.length;
  }

Decorator.prototype.paintStock = function(paint) {
    this.decorator.push(paint)
}

module.exports = Decorator;