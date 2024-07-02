var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];

function findItemsOver(itemList, threshold) {
  var itemsOverThreshold = [];
  for (var i = 0; i < itemList.length; i++) {
    if (itemList[i].qty > threshold) {
      itemsOverThreshold.push(itemList[i]);
    }
  }
  return itemsOverThreshold;
}
// console.log(findItemsOver(itemList, 25));  