const assert = require(`assert`);

const Decorator = require(`../decorator.js`);
const Room = require(`../room.js`);
const Paint = require(`../paint.js`);

describe (`Decorator`, function(){
    let Decorator;
    beforeEach (function(){
        room = new Room(100, false);
        decorator = new Decorator(room);
    })
    it(`should start with empty stock`, function(){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [])
    })
})

it(`should be able to add paint to stock`, function(){
    decorator.paintStock(1);
    const actual = decorator.numInStock();
    assert.strictEqual(actual, 1);
});