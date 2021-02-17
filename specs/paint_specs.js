const assert = require(`assert`)
const Paint = require(`../paint.js`)

describe (`Paint`, function(){
    let paint;
    beforeEach(function() {
        paint = new Paint(100, true, false)
    });
    it(`should check number of litres of paint`, function(){
        const actual = paint.litresAmount;
        assert.strictEqual(actual, 100)
    });
    it(`should be able to check if empty`, function(){
        const actual = paint.checkEmpty;
        assert.strictEqual(actual, true)
    });
    it(`should be able to empty itself`, function(){
        const actual = paint.emptySelf;
        assert.strictEqual(actual,false)
    });
})