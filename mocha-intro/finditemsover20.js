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

function findItemsOver20(itemList) {
  var itemsOver20 = [];
  for (var i = 0; i < itemList.length; i++) {
    if (itemList[i].qty > 20) {
      itemsOver20.push(itemList[i]);
    }
  }
  return itemsOver20;
}
// console.log(findItemsOver20(itemList));

function findItemsOver20(itemList2) {
    var itemsOver20 = [];
    for (var i = 0; i < itemList2.length; i++) {
      if (itemList2[i].qty > 20) {
        itemsOver20.push(itemList2[i]);
      }
    }
    return itemsOver20;
  }
  // console.log(findItemsOver20(itemList2));

function findItemsOver20(itemList3) {
    var itemsOver20 = [];
    for (var i = 0; i < itemList3.length; i++) {
      if (itemList3[i].qty > 20) {
        itemsOver20.push(itemList3[i]);
      }
    }
    return itemsOver20;
  }
//   console.log(findItemsOver20(itemList3));

