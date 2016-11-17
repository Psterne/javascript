// Exercise 4.1

var myArray = [10, 20, 30, 40];
var newArray = []; // This array will contain 11, 21, 31, 41

for (i = 0; i < myArray.length; i++) {
  newArray.push(myArray[i] + 1); // Here we're pushing the incremented numbers from myArray into the new array
}

  // Code School version:
  var myArray = [10, 20, 30, 40];
  for (i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i]+1;
  };



// -----------------------------------
// Exercise 4.2.

var stringyArray = ["Super", "Cali", "Fragi", "Listic", "Expi", "Ali", "Docious"];

stringyArray.forEach(combine)
function combine() {
  var joinedString = stringyArray.join(""); // For every value in array, use join()
}

console.log(joinedString); // Then, print the joined values as one string

  // Code School version:
  var stringyArray = ["Super", "Cali", "Fragi", "Listic", "Expi", "Ali", "Docious"];
  my_string = "";
  stringyArray.forEach(function(x) {
    my_string = my_string + x;
    console.log("my_string is", my_string);
  });



// -----------------------------------
// Exercise 4.3.

var myArray = [10, 20, 30, 40];
var average = 0;

for (i = 0; i < myArray.length; i++) {
  average += myArray[i] / myArray.length; // Take each value in array and divide it by number of elements in array. Add together.
}

console.log(average);
