// Exercise 3.1. (Without use of loops)

var myArray = [10, 20, 30, 40];
myArray[0] = myArray[0] + 1;
myArray[1] = myArray[1] + 1;
myArray[2] = myArray[2] + 1;
myArray[3] = myArray[3] + 1;

console.log(myArray);

// Excercise 3.2.
myArray.push(51);

console.log(myArray);


// Exercise 3.3.

var stringyArray = ["Super", "Cali", "Fragi", "Listic", "Expi", "Ali", "Docious"];

var myString = stringyArray.toString().concat(); // Convert to string, then join all values

console.log(myString);


// Exercise 3.4

var stringyArray = ["Super", "Cali", "Fragi", "Listic", "Expi", "Ali", "Docious"];

var joinedString = stringyArray.join("");

console.log(joinedString);
