// console.log(totalPhoneBill(totalBillList));

describe('Test my totalPhoneBill function' , function(){
    it('it should return the total amount for all the calls that were made and sms sent' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    });
});