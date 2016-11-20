// Exercise 1:

var myCat = {
  name: "alasdair",
  siblings: ["snejana"],
  color: "grey",
  cute: true
}

for(var property in myCat) { // go through all properties in myCat object
  console.log(property); // print each property
}


// Exercise 2:

console.log(myCat);

delete myCat["siblings"]; // delete the siblings property in myCat

console.log(myCat);


// Exercise 3:




// Exercise 4:

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];


for (var i = 0; i < library.length; i++) { // iterate through all elements in the array
  var bookDetails = library[i].title + " by " + library[i].author; // string consisting of book name and author
  if (library[i].readingStatus == true) {
    console.log("I've read " + bookDetails); // if book was read, print string
  } else {
    console.log("I've not read " + bookDetails); // if book wasn't read, print other string
  };

}


// Exercise 8:

function clock() {
  var currentTime = new Date(); // get the current system time
  var hours = currentTime.getHours(); // extract just the hours from system time
  var mins = currentTime.getMinutes(); // extract just the minutes from system time
  var secs = currentTime.getSeconds(); // extract just the seconds from system time
  console.log(hours + ":" + mins + ":" + secs); // print current hours, min, sec
}

setInterval(clock, 1000); // refresh every second
