// console.log(greet('Bob'));
// console.log(greet('Sam'));
// console.log(greet('Lesego'));//The function will return as 'Hello, Bob'


describe('Test my greet function' , function(){
    it('it should return "Hello, Lesego, Bob or Sam" when called with "the specific name"' , function(){
        assert.equal ("Hello, Lesego", greet("Lesego"));
        assert.equal ("Hello, Bob", greet("Bob"));
        assert.equal ("Hello, Sam", greet("Sam"));
    });
});

