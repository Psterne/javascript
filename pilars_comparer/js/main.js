
// The function should be called with a click on the "submit" button

document.getElementById("submit").onclick = function() {myComparer()};

// The function starts here:

function myComparer() {

  // Declare variables so Javascript knows where to get the iputs from:
  var val_1 = document.getElementById("a").value;
  var val_2 = document.getElementById("b").value;

  // Compare the values and output the result to the comparison HTML element:
  if (val_1 == val_2) {
    document.getElementById("comparison").innerHTML = "=";
  } else if (val_1 > val_2) {
    document.getElementById("comparison").innerHTML = ">";
  } else if (val_1 < val_2) {
    document.getElementById("comparison").innerHTML = "<";
  };

};
