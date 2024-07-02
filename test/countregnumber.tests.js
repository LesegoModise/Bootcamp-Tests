// var regCount1 ='CA 182736,CY 523519,CJ 812328';
// console.log(countRegNumber(regCount1));

// var regCount2 = 'CA 182736';
// console.log(countRegNumber(regCount2));

// var regCount3 = 'CA 42665, AA 12 RT GP';
// console.log(countRegNumber(regCount3));

describe('Test my countRegNumber function' , function(){
    it('it should return the number of registration numbers from the string given' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});