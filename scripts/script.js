$(document).ready(function() {
  $('#userinput').keypress(function(e) {
    var key = e.which;
    if (key == 13) // the enter key cod
    {
      var go = ['walk', 'go', 'run', 'crawl', 'jump'];
      var see = ['look', 'see', 'observe', 'scan', 'look around'];
      var pickup = ['pick', 'pick up', 'grab', 'snatch'];
      var input = document.getElementById("userinput").value;
      for (var i = 0; i < go.length; i++) {
        if (input === "back") {

        }
        if (input === go[i] + " " + 'north' || input === 'north') {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards the north of the apartment</span>");
        } else if (input === go[i] + " " + 'south' || input === 'south') {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards south of the apartment</span>");
        } else if (input === go[i] + " " + 'west' || input === 'west') {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards west of the apartment</span>");
        } else if (input === go[i] + " " + 'east' || input === 'east') {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards east of the apartment</span>");
        } else if (input === go[i]) {
          $('.actions').html("<span class=\"confused\"><i>Which direction?</span>");
        }
      }
      $('#userinput').val('');
    }
  });
});
