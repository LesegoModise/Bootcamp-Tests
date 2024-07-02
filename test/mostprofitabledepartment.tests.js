describe('Test my mostProfitableDepartment function' , function(){
    it('it should return "outdoor" for dataset 1' , function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    });
    it('it should return "electronics" for dataset 2' , function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
    });
});



