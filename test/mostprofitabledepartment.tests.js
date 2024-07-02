describe('Test my mostProfitableDepartment function' , function(){
    it('it should return "outdoor" for dataset 1 and "electronics" for dataset 2' , function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
    });
});



