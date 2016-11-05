// The function should run as soon as the user clicks the Submit button:
document.getElementById("submit").onclick = function() {vowel()};

function vowel(){
// We get the input from the box with id char:
  var character = document.getElementById("char").value;
// We test if the entered value is a vowel. We ignore uppercase/lowercase and non-single character inputs:
  document.getElementById("result").innerHTML = (/^[aeiou]$/i).test(character);
};





/*

JavaScript test() Method: searches string for character. In this case, we are searching character
for a vowel.

---

[abc] --> a character set

i --> ignore case

/^ and /$ --> ignore cases where a word contains a vowel;
for example, "out" and "go" are not vowels, even though though they contain a vowel at beginning or end.

*/
