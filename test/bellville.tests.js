// console.log(isFromBellville('CY 123'));
// console.log(isFromBellville('CJ 123'));

describe('Test my isFromBellville function' , function(){
    it('it should return "true" if its from Bellville and "false" if not' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('it should return "true" if its from Bellville and "false" if not' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
    it('it should return "true" if its from Bellville and "false" if not' , function(){
        assert.equal(isFromBellville('34 CD 73 GP'), false);
    });
});