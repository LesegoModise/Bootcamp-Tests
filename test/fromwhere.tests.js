// console.log(fromWhere('CY 567489'));
// console.log(fromWhere('CJ 343502'));
// console.log(fromWhere('CA 987504'));
// console.log(fromWhere('ZN 568593'));

describe('Test my totalPhoneBill function' , function(){
    it('it should return the total amount for all the calls that were made and sms sent' , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    });
    it('it should return the total amount for all the calls that were made and sms sent' , function(){ 
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });
    it('it should return the total amount for all the calls that were made and sms sent' , function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it('it should return the total amount for all the calls that were made and sms sent' , function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});