describe('Test my countAllFromTown function' , function(){
    it('it should return the total of all the cars from that specific town' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
    });
    it('it should return the total of all the cars from that specific town' , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)
    });
});