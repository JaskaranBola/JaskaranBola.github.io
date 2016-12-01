$(document).ready(function() {
  var input = $('input[name=userinput]').val();
  $('#userinput').keypress(function(e) {
    var key = e.which;
    if (key == 13) // the eenter key cod
    {
      alert("sss");
      var input = $('input[name=userinput]').val();
      if (input === 'north') {
        $('.actions').text("You went" + input);
      }
    }
  });
});
