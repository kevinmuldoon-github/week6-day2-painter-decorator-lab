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

    it('can check if paint is empty' , function() {
        const actual = paint.is_empty;
        assert.strictEqual(actual, false);
    });

    it('be able to empty paint can' , function() {
        paint.empty_can();
        const actual = paint.is_empty;
        assert.strictEqual(actual, true);
    }); 


});