//Copyright Jaskaran Bola 2016

$(document).ready(function() {
  $('#userinput').keypress(function(e) {
    var key = e.which;
    if (key === 13) // Enter code starts here
    {
      var go = ['walk', 'go', 'run', 'crawl', 'jump', 'move', 'displace'];
      var see = ['look', 'see', 'observe', 'scan', 'look around', 'scan area'];
      var pickup = ['pick', 'pick up', 'grab', 'snatch', 'get', 'take', 'obtain', 'steal', 'pickup'];
      var use = ['use', 'activate', 'turn on', 'put in', 'unlock'];
      var level = 0;
      var input = document.getElementById("userinput").value.toLowerCase();
      var img = $("#darkroom");
      var flashlight = $("#flashlight");
      var key = $("#key");
      var inventory = [];
      var footsteps = new Audio('https://www.freesound.org/data/previews/153/153104_2364485-lq.mp3');

      for (var i = 0; i < go.length; i++) {
        if (input === "back" && img.attr('src') !== "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          $('.story').html("You came back to the center of the apartment, now what? Maybe you should try <u>looking</u> around or going towards another <u>direction</u>.");
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
        } else if (input === go[i] + " " + 'back' && img.attr('src') !== "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          $('.story').html("You came back to the center of the apartment, now what? Maybe you should try <u>looking</u> around or going towards another <u>direction</u>");
          $('.actions').html("<span class=\"actionoutput\"><i>You went back to the room</span>");
          level = 1;
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
        $('.story').html("You go towards the east and see a dusty old kitchen. The kitchen doesn\'t seem very hygienic. Try <u>looking</u> around or go <u>back</u> to the center. <span class=\"joke\">I hope you didn\'t eat anything from here.</span>");
      } else if (level === 4 && img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
        img.fadeOut(1000, function() {
          img.attr("src", "https://i.imgur.com/OhQL2yM.jpg").fadeIn(1000);
        });
        $('.itemsNotif').html(" ");
        $('.story').html("You go towards the north and see...-It's too dark to see. You cannot see much, maybe you can <u>use</u> something to brighten the room or you can go <u>back</u> and try another direction.");
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
            $('.itemsNotif').html("<span>Nothing useful here...</span>");
          } else if (img.attr('src') === "http://theblacksheeponline.com/wp-content/uploads/2016/03/powerout.png") {
            $('.itemsNotif').html("<span class=\"foundItems\"><u>Piece of paper</u></span>");
          } else if (img.attr('src') === "https://i.imgur.com/WhWoXqZ.jpg") {
            $('.itemsNotif').html("<span class=\"foundItems\"><u>Key</u></span>");
          } else if (img.attr('src') === "https://docs.unrealengine.com/latest/images/Resources/Showcases/RealisticRendering/NightSceneNoLights/RoomNightNoLights.jpg") {
            $('.itemsNotif').html("<span class=\"foundItems\"><u> </u></span>");
          } else if (img.attr('src') === "https://media.gettyimages.com/videos/graphic-fades-in-small-question-mark-moves-closer-to-screen-then-out-video-id1B02262_0008?s=640x640") {
            $('.itemsNotif').html("<span class=\"blind\">You cannot see anything! <span class=\"joke\">Try turning on the lights next time..</span></span>");
          } else if (img.attr('src') === "https://i.imgur.com/OhQL2yM.jpg") {
            $('.itemsNotif').html("<span class=\"blind\">You cannot see anything! <span class=\"joke\">Try turning on the lights next time..</span></span>");
          }
        }
      } //end of see 
      for (var k = 0; k < pickup.length; k++) {
        if (input === pickup[k]) {
          $('.actions').html("<span class=\"confused\"><i>Which <u>item</u> would you like to pick up?</i></span>");
        }
        if (img.attr('src') === "http://www.nikdaum.com/news/09shanghai1625.jpg") {
          if (input === pickup[k] + " " + "flashlight") {
            inventory.push("flashlight");
            $('.actions').html("<span class=\"actionoutput\"><i>You picked up a flashlight</span>");
            $('.items').append("<img class=\'icons\' id=\'flashlight\' src=\"https://cdn4.iconfinder.com/data/icons/proglyphs-miscellaneous/512/Flashlight-512.png\">");
          }
        }
        if (img.attr('src') === "https://i.imgur.com/WhWoXqZ.jpg") {
          if (input === pickup[k] + " " + "key") {
            inventory.push("key");
            $('.actions').html("<span class=\"actionoutput\"><i>You picked up a key</span>");
            $('.items').append("<img class=\'icons\' id=\'key\' src=\"http://www.iconsdb.com/icons/preview/black/key-xxl.png\">");
          }
        }
        if (img.attr('src') === "https://media.gettyimages.com/videos/graphic-fades-in-small-question-mark-moves-closer-to-screen-then-out-video-id1B02262_0008?s=640x640") {
          if (input === pickup[k]) {
            $('.actions').html("<span class=\"actionoutput\"><i>You tried to grab something in the dark but, it was to no avail</span>");
            $('.itemsNotif').html("<span class=\"blind\">It probably isn\'t a good idea to randomly grab stuff in the dark. <span class=\"joke\">Who knows what\'s lying around.</joke></span>");
          }
        }
      } // end of pickup
      for (var m = 0; m < use.length; m++) { //Item if statements contained in image statements to reduce complexity of the use if statement.
        if (input === use[m]) {
          $('.actions').html("<span class=\"confused\"><i>Which <u>item</u> do you want to use?</i></span>");
        }
        if (img.attr('src') === "https://media.gettyimages.com/videos/graphic-fades-in-small-question-mark-moves-closer-to-screen-then-out-video-id1B02262_0008?s=640x640") {
          if (input === use[m] + " " + "flashlight" && flashlight.attr('src') === "https://cdn4.iconfinder.com/data/icons/proglyphs-miscellaneous/512/Flashlight-512.png") {
            $('.actions').html("<span class=\"actionoutput\"><i>You used the flashlight</span>");
            img.fadeOut(1000, function() {
              img.attr("src", "https://i.imgur.com/WhWoXqZ.jpg").fadeIn(1000);
            });
            $('.story').html("As you turn on the flashlight, the darkness fades into light. You see a dusty room that seems like it hasn\'t been touched in months. There has to be something that could help you here, try <u>looking</u> around or go <u>back</u> to go to another room.");
          }
        } else if (img.attr('src') === "https://i.imgur.com/OhQL2yM.jpg") {
          if (input === use[m] + " " + "flashlight" && flashlight.attr('src') === "https://cdn4.iconfinder.com/data/icons/proglyphs-miscellaneous/512/Flashlight-512.png") {
            $('.actions').html("<span class=\"actionoutput\"><i>You used the flashlight</span>");
            img.fadeOut(1000, function() {
              img.attr("src", "http://theblacksheeponline.com/wp-content/uploads/2016/03/powerout.png").fadeIn(1000);
            });
            $("#tabIcon").attr("href","https://i.imgur.com/7oF9RA4.png");
            $('.story').html("As you turn on the flashlight, the darkness fades into light. You see a door! Thats probably a good sign. This could be the way out. Hurry and get it to open and escape!");
          }
        } else if (img.attr('src') === "http://theblacksheeponline.com/wp-content/uploads/2016/03/powerout.png") {
          if (input === use[m] + " " + "key" && key.attr('src') === "http://www.iconsdb.com/icons/preview/black/key-xxl.png") {
            $('.actions').html("<span class=\"actionoutput\"><i>You used the key</span>");
            $('.story').html("A click sound is made by the key in the lock. The door is unlocks and the doors open wide. You are in a hallway of what seems to be an apartment. You don\'t remember going to an apartment. As you are contemplating about how you got there, you <u>hear</u> something close.");
            img.fadeOut(1000, function() {
              img.attr("src", "http://lh6.ggpht.com/_rTWMU1dqLCk/TBZlqgVlpTI/AAAAAAAADQY/CQnG6nkaPBo/s1600/None.jpg").fadeIn(1000);
            });
            $('.itemsNotif').html("");
          }
        }
      } // end of use
//-------------------------------------TBC
      if (input === "hear" && img.attr('src') === "http://lh6.ggpht.com/_rTWMU1dqLCk/TBZlqgVlpTI/AAAAAAAADQY/CQnG6nkaPBo/s1600/None.jpg") {
        footsteps.play();
        $('.actions').html("<span class=\"actionoutput\"><i>You listen carefully</span>");
        $('.story').html("What was that? Footsteps? <i>Is someone coming</i>? That\'s the first sound you heard in the area, it probably isn\'t a coincidence. <u>RUN</u>!");
      }
      if (input === "run" && img.attr('src') === "http://lh6.ggpht.com/_rTWMU1dqLCk/TBZlqgVlpTI/AAAAAAAADQY/CQnG6nkaPBo/s1600/None.jpg") {
        $('.actions').html("");
        $('.itemsNotif').html("");
        $('.story').html("<span class=\"end\"><strike>The End</strike> <br>To Be <u>Continued</u>...</span>");
        img.fadeOut(1000, function() {
          img.attr("src", "https://media.giphy.com/media/3oz8xAnIX9sauh1JiE/giphy.gif").fadeIn(1000);
        });
      }
//-------------------------------------TBC
    } // end of enter key area
  });
});
