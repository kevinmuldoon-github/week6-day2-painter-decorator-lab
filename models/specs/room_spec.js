const assert = require('assert');
const Room = require('../room.js');

describe ('Room' , function () {
    let room;

    beforeEach(function () {
        room = new Room(5);
    });

    it('should have an area' , function () {
        const actual = room.area;
        assert.strictEqual(actual, 5);
    });

    it('should should start unpainted' , function () {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it('can room be painted' , function () {
        room.paint_room();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    });

});