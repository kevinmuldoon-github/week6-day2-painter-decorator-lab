const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe ('Decorator' , function() {

    let decorator;

    beforeEach(function() {
        decorator = new Decorator();
        room = new Room(25);
        paint1 = new Paint(5);
        paint2 = new Paint(7);
        paint3 = new Paint(3);
    });

    it('should start with empty paint stock' , function() {
        const actual = decorator.paint_stock;
        assert.deepStrictEqual(actual , [])
    });

    it ('can add a can of paint to stock' , function () {
        decorator.add_paint(paint1);
        const actual = decorator.paint_stock.length;
        assert.strictEqual(actual , 1)

    });

    it('can calculate number of litres of paint it has in stock' , function () {

        decorator.add_paint(paint1);
        decorator.add_paint(paint2);
        decorator.add_paint(paint3);

        const actual = decorator.total_paint();
        assert.strictEqual(actual , 15)
    });

    it ('calculate whether is has enough paint to paint a room' , function () {

        decorator.add_paint(paint1);
        decorator.add_paint(paint2);
        decorator.add_paint(paint3);

        const actual = decorator.can_paint_room(room);
        assert.strictEqual(actual, false)

    });

    it ('can paint room if there is enough paint' , function () {

        decorator.add_paint(paint1);
        decorator.add_paint(paint2);
        decorator.add_paint(paint3);
        decorator.add_paint(paint1);
        decorator.add_paint(paint1);

        const actual = decorator.paint_room(room);
        assert.strictEqual(actual, true);

    });

});