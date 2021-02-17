const assert = require(`assert`);

const Room = require(`../room.js`);
const Decorator = require(`../decorator.js`);


describe(`Room`, function(){
    let room;//set up 
    beforeEach (function(){
        room = new Room(100, false);
        decorator = new Decorator(room)
    });
    it(`should have an area`, function(){
        const actual = room.area;
        assert.strictEqual(actual, 100);
    });
    it(`is or is not painted`, function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });
    it(`can be painted`, function(){
        const actual = decorator.paintRoom(room)
        assert.strictEqual(actual, true);
    })
});