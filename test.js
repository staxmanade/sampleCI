var assert = require('assert');
describe("something to test", function(){

    it("Should do something cool", function(){
        assert.equal("hello", "hello");
    });

    it("Should fail", function(){
        assert.equal("hello", ":D");
    });

});
