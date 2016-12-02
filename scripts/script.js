$(document).ready(function() {
  $('#userinput').keypress(function(e) {
    var key = e.which;
    if (key == 13) // the enter key cod
    {
      var go = ['walk', 'go', 'run', 'crawl', 'jump'];
      var see = ['look', 'see', 'observe', 'scan', 'look around'];
      var pickup = ['pick', 'pick up', 'grab', 'snatch'];
      var level = 0;
      var input = document.getElementById("userinput").value.toLowerCase();
      var img = $("#darkroom");
      for (var i = 0; i < go.length; i++) {
        if (input === "back" && img.attr('src') !== "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          img.fadeOut(1000, function() {
            img.attr("src", "http://www.nikdaum.com/news/09shanghai1625.jpg").fadeIn(1000);
          });
          $('.actions').html("<span class=\"actionoutput\"><i>You went back to the room</span>");
        }
        if (input === go[i] + " " + 'north' || input === 'north') {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards the north of the apartment</span>");
          var level = 1;
        } else if (input === go[i] + " " + 'south' || input === 'south') {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards south of the apartment</span>");
          var level = 3;
        } else if (input === go[i] + " " + 'west' || input === 'west') {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards west of the apartment</span>");
          var level = 4;
        } else if (input === go[i] + " " + 'east' || input === 'east') {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards east of the apartment</span>");
          var level = 2;
        } else if (input === go[i]) {
          $('.actions').html("<span class=\"confused\"><i>Which direction: <u>North</u>, <u>South</u>, <u>West</u> or <u>East</u>?</span>");
        }
      }
      $('#userinput').val('');
      if (level === 1 && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
        img.fadeOut(1000, function() {
          img.attr("src", "https://i.imgur.com/WhWoXqZ.jpg").fadeIn(1000);
        });
      } else if (level === 2 && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
        img.fadeOut(1000, function() {
          img.attr("src", "https://i.imgur.com/WhWoXqZ.jpg").fadeIn(1000);
        });
      } else if (level === 3 && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
        img.fadeOut(1000, function() {
          img.attr("src", "https://i.imgur.com/WhWoXqZ.jpg").fadeIn(1000);
        });
      } else if (level === 4 && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
        img.fadeOut(1000, function() {
          img.attr("src", "https://i.imgur.com/WhWoXqZ.jpg").fadeIn(1000);
        });
      }
      for (var i = 0; i < see.length; i++) {}
      
      for (var i = 0; i < pickup.length; i++) {
      
      
      }


    } // enter key area
  });
});
