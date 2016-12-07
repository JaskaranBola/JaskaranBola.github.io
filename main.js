$(document).ready(function() {
  $('#userinput').keypress(function(e) {
    var key = e.which;
    if (key === 13) // Enter code starts here
    {
      var go = ['walk', 'go', 'run', 'crawl', 'jump'];
      var see = ['look', 'see', 'observe', 'scan', 'look around', 'scan area'];
      var pickup = ['pick', 'pick up', 'grab', 'snatch', 'get', 'take', 'obtain', 'steal', 'pickup'];
      var level = 0;
      var input = document.getElementById("userinput").value.toLowerCase();
      var img = $("#darkroom");
      var inventory = [];

      for (var i = 0; i < go.length; i++) {
        if (input === "back" && img.attr('src') !== "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          $('.story').html("You came back to the center of the apartment, now what? Maybe you should try <u>looking</u> around or going towards another <u>direction</u>");
          $('.actions').html("<span class=\"actionoutput\"><i>You went back to the room</span>");
          level = 1;
        }
        if (input === go[i] + " " + 'north' && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards the north of the apartment</span>");
          level = 2;
        } else if (input === go[i] + " " + 'south' && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards south of the apartment</span>");
          level = 4;
        } else if (input === go[i] + " " + 'west' && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards west of the apartment</span>");
          level = 5;
        } else if (input === go[i] + " " + 'east' && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          $('.actions').html("<span class=\"actionoutput\"><i>You went towards east of the apartment</span>");
          level = 3;
        } else if (input === go[i]) {
          $('.actions').html("<span class=\"confused\"><i>Which direction: <u>North</u>, <u>South</u>, <u>West</u> or <u>East</u>?</span>");
        }
      } //end of go
      $('#userinput').val('');
      if (level === 1) {
        img.fadeOut(1000, function() {
          img.attr("src", "http://www.nikdaum.com/news/09shanghai1625.jpg").fadeIn(1000);
        });
        $('.itemsNotif').html(" ");
      } else if (level === 2 && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
        img.fadeOut(1000, function() {
          img.attr("src", "https://media.gettyimages.com/videos/graphic-fades-in-small-question-mark-moves-closer-to-screen-then-out-video-id1B02262_0008?s=640x640").fadeIn(1000);
        });
        $('.itemsNotif').html(" ");
        $('.story').html("You go towards the north and see...-It's too dark to see. You cannot see much, maybe you can <u>use</u> something to brighten the room or you can go <u>back</u> and try another direction.");
      } else if (level === 3 && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
        img.fadeOut(1000, function() {
          img.attr("src", "http://creativefan.com/important/cf/2012/09/dark-kitchen-cabinets/old-style-kitchen.jpg").fadeIn(1000);
        });
        $('.itemsNotif').html(" ");
        $('.story').html("You go towards the east and see");
      } else if (level === 4 && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
        img.fadeOut(1000, function() {
          img.attr("src", "https://media.gettyimages.com/videos/graphic-fades-in-small-question-mark-moves-closer-to-screen-then-out-video-id1B02262_0008?s=640x640").fadeIn(1000);
        });
        $('.itemsNotif').html(" ");
      } else if (level === 5 && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
        img.fadeOut(1000, function() {
          img.attr("src", "https://docs.unrealengine.com/latest/images/Resources/Showcases/RealisticRendering/NightSceneNoLights/RoomNightNoLights.jpg").fadeIn(1000);
        });
        $('.itemsNotif').html(" ");
        $('.story').html("You go towards the west and see a living room. The first thing you notice is the faint light emitting from a tipped over lamp. The next thing you notice is the window; it appears you are above ground level. The window is completely sealed and the glass doesn't seem brittle. There was no way you are going to be able to leave from this way. Try <u>looking</u> around or go <u>back</u> to the center.");
      } //end of level change
      for (var j = 0; j < see.length; j++) {
        if (input === see[j]) {
          $('.actions').html("<span class=\"actionoutput\"><i>You look around the room</span>");
          if (img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
            $('.itemsNotif').html("<span class=\"foundItems\"><u>flashlight</u></span>");
          } else if (img.attr('src') === "http://creativefan.com/important/cf/2012/09/dark-kitchen-cabinets/old-style-kitchen.jpg") {
            $('.itemsNotif').html("<span class=\"foundItems\"><u> </u></span>");
          } else if (img.attr('src') === "http://theblacksheeponline.com/wp-content/uploads/2016/03/powerout.png") {
            $('.itemsNotif').html("<span class=\"foundItems\"><u>Piece of paper</u></span>");
          } else if (img.attr('src') === "https://i.imgur.com/WhWoXqZ.jpg") {
            $('.itemsNotif').html("<span class=\"foundItems\"><u>Key</u></span>");
          } else if (img.attr('src') === "https://docs.unrealengine.com/latest/images/Resources/Showcases/RealisticRendering/NightSceneNoLights/RoomNightNoLights.jpg") {
            $('.itemsNotif').html("<span class=\"foundItems\"><u> </u></span>");
          } else if (img.attr('src') === "https://media.gettyimages.com/videos/graphic-fades-in-small-question-mark-moves-closer-to-screen-then-out-video-id1B02262_0008?s=640x640"); {
            $('.itemsNotif').html("<span class=\"blind\">You cannot see anything! <span class=\"joke\">Try turning on the lights next time..</span></span>");
          }
        }
      } //end of see 
      for (var k = 0; k < pickup.length; k++) {
        if (img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          if (input === pickup[k] + " " + "flashlight") {
            inventory.push("flashlight");
            $('.actions').html("<span class=\"actionoutput\"><i>You picked up a flashlight</span>");
            $('.items').append("<img class=\'icons\' src=\"https://cdn4.iconfinder.com/data/icons/proglyphs-miscellaneous/512/Flashlight-512.png\">");
          }
        }
        if (img.attr('src') === "https://i.imgur.com/WhWoXqZ.jpg") {
          if (input === pickup[k] + " " + "key") {
            inventory.push("key");
            $('.actions').html("<span class=\"actionoutput\"><i>You picked up a key</span>");
            $('.items').append("<img class=\'icons\' src=\"http://www.iconsdb.com/icons/preview/black/key-xxl.png\">");
          }
        }
      } // end of pickup
    } // end of enter key area
  });
});
