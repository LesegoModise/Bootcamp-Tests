// console.log(isWeekday('Sunday'));
// console.log(isWeekday('Monday'));
// console.log(isWeekday('Tuesday'));
// console.log(isWeekday('Wednesday'));
// console.log(isWeekday('Thursday'));
// console.log(isWeekday('Friday'));
// console.log(isWeekday('Saturday'));

describe('Test my isWeekday function' , function(){
    it('it should return "true" if it is a day of the week and "false" if it is not' , function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });
});
