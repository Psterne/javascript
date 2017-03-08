const myCombos = (stringy) => {
  if(!stringy) return stringy;
  const splitStringy = stringy.split('');
  var resp = [];
  splitStringy.forEach((char,idx,collection) => {
    var newList = collection.slice();
    var lessList = newList.splice(idx,1);
    // resp = resp.concat(lessList.concat(myCombos(newList.join(''))))
  })
  return resp;
}
console.log(myCombos("pilar"));
//Return all of the combinations
