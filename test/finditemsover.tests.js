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

describe('Test my findItemsOver function' , function(){
    it('it should return pears - 37 and bananas - 27 for item list 1, and apples - 40; bananas - 23 and apples - 37 for item list 3. There is no items over 20 in item list 2.' , function(){
        assert.deepEqual(results, findItemsOver(itemList, 20));
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
});

// console.log('findItemsOver passed!');