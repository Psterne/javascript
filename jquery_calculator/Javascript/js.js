/* Add value to box one, needs to be a number;
then, add value to box two, needs to be a number;
output value needs to be value 1 + value 2 */


$(function(){
  //get value from first input
  $('.calculate').click(function() {
    console.log('button was clicked');
    var val1 = parseInt($('#value1').val());
    console.log('value 1 is ' + val1);
    var val2 = parseInt($('#value2').val());
    var oprtr = $('select').val();

    if (oprtr == 'plus') {
      var answer = (val1 + val2);
    };
    if (oprtr == 'minus') {
      var answer = (val1 - val2);
    };
    if (oprtr == 'multiply') {
      var answer = (val1 * val2);
    };
    if (oprtr == 'divide') {
      var answer = (val1 / val2);
    };
    $('.output').html(answer);
  });


  //get value from second input
  // add both values together
  // display answer

});
