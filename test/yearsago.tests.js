// console.log(yearsAgo(1976));
// console.log(yearsAgo(2000));

describe('Test my yearsAgo function' , function(){
    it('it should return how many years ago it is from the current year' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });
    it('it should return how many years ago it is from the current year' , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});