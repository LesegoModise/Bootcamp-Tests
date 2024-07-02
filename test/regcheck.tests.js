// var isGP = regCheck('RG 45 HN GP', 'GP');
// console.log(isGP);

// var isEC = regCheck('LKG 679 EC', 'EC');
// console.log(isEC);

// var isMP = regCheck('GHT 456 MP', 'MP');
// console.log(isMP);

// var isL = regCheck('FGT 491 L', 'L');
// console.log(isL);

// var isND = regCheck('ND 123-456', 'ND');
// console.log(isND);

// var isCY = regCheck('CY 678-453', 'CY');
// console.log(isCY);

// var isCA = regCheck('CA 1234-123', 'CA');
// console.log(isCA);

describe('Test my regCheck function' , function(){
    it('it should return "true" if it is from the town and "false" if it is not' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
    it('it should return "true" if it is from the town and "false" if it is not' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);
    });
    it('it should return "true" if it is from the town and "false" if it is not' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });
    it('it should return "true" if it is from the town and "false" if it is not' , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});

