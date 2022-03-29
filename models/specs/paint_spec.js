const assert = require('assert');
const Paint = require('../paint.js');

describe ('Paint' , function() {
    let paint;

    beforeEach(function() {
        paint = new Paint(5);
    });

    it('should have litres of paint', function() {
        const actual = paint.litres;
        assert.strictEqual(actual, 5);
    });


});