const Room = require("./room");

const Decorator = function () {
    this.paint_stock = [];

};

Decorator.prototype.add_paint = function (paint) {
    this.paint_stock.push(paint);

};

Decorator.prototype.total_paint = function () {
    let total = 0;

    for (let paint of this.paint_stock) {
        total += paint.litres;
    }

    return total;

};

Decorator.prototype.can_paint_room = function (room) {
    let can_paint;

    total_paint = this.total_paint();

    if (total_paint >= room.area) {
        can_paint = true;
    } else {
        can_paint = false;
    }

    return can_paint;

};

Decorator.prototype.paint_room = function (room) {
    let can_paint = this.can_paint_room(room);

    if (can_paint == true) {
        room.painted = true;
    };

    return room.painted;

};

module.exports = Decorator;