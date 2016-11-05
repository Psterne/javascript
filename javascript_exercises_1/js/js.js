// The function should run as soon as the user clicks the Submit button:

document.getElementById("submit").onclick = function() {max()};

function max(){

// The two values we want to compare are whichever numbers a user enters in box #a and #b:
 var num_1 = document.getElementById("a").value;
 var num_2 = document.getElementById("b").value;

// We want to compare floats (not strings or integers), so we parse the two values as floats:
  num_1 = parseFloat(num_1);
  num_2 = parseFloat(num_2);

// The maximum should be displayed in the space with id #comparison:. Javascript has a built-in in math.max
// function that is built-in and gives us the maximum out of all numbers it's comparing: 
  document.getElementById("comparison").innerHTML = Math.max(num_1,num_2);
};
