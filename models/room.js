const Room = function (area) {
    this.area = area;
    this.painted = false;
};

Room.prototype.paint_room = function() {
    this.painted = true;
};

module.exports = Room;