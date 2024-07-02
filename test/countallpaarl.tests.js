describe('Test my countAllPaarl function' , function(){
    it('it should return the total of all Pearl registration numbers' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('it should return the total of all Pearl registration numbers' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});

