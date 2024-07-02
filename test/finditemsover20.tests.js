var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var results2 = [];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

describe('Test my findItemsOver20 function' , function(){
    it('it should return pears - 37 and bananas - 27 for item list 1.' , function(){
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it('There is no items over 20 in item list 2.' , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
    it('it should return apples - 40; bananas - 23 and apples - 37 for item list 3.' , function(){
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });
});


// console.log('findItemsOver20 passed!')