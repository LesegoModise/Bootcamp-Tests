// console.log(greet('Bob'));
// console.log(greet('Sam'));
// console.log(greet('Lesego'));//The function will return as 'Hello, Bob'


describe('Test my greet function' , function(){
    it('it should return "Hello, Lesego" when called with "Lesego"' , function(){
        assert.equal ("Hello, Lesego", greet("Lesego"));
    });
    it('it should return "Hello, Bob" when called with "Bob"' , function(){
        assert.equal ("Hello, Bob", greet("Bob"));
    });
    it('it should return "Hello, Sam" when called with "Sam"' , function(){
        assert.equal ("Hello, Sam", greet("Sam"));
    });
});

