// sum should add all entries in an array and return its result.

var mySumArray = [2, 3, 6, 8];
for (var i = 0, total = 0; i < mySumArray.length; total += mySumArray[i++]);

function sum(mySumArray) {
  return total;
};



// multiply should multiply each entry in the array like 1 * 2 * 3 * 4 and return its result.

var myProdArray = [2, 3, 6, 8];
for (var i = 0, product = 1; i < myProdArray.length; product *= myProdArray[i++]);

function multiply(myProdArray) {
  return product;
};
