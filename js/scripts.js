var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var entered = "";
var at_password = false;
var is_finished = false;

function GenerateMessage(msg) {
  var dt = new Date();
  var time = dt.getHours() + ":" + (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();

  return "<div class='container'><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/2159582/robot.jpg' alt='Avatar'><p>" + msg + "</p><span class='time-right'>" + time + "</span></div>"
}

function GenerateUserMessage(msg) {
  var dt = new Date();
  var time = dt.getHours() + ":" + (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();

  return "<div class='container darker user-chat-container'><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/2159582/avatar-placeholder.png' alt='Avatar' class='right'><p>" + msg + "</p><span class='time-left'>" + time + "</span></div></div>"
}

setTimeout(function() {
  steve_write("Hello. My name is Stewart bot. I can do many things in my creator's mind for sure but first I am here to assist you with your registration. Now, would you be so kind and tell me your full name?");
}, 1000);

$(document).keypress(function(e) {
  if (e.which == 13) {
    if ($('#chat-message').val()) {
      entered = $('#chat-message').val();
      $('.chat').append(GenerateUserMessage(entered))
      $('#chat-message').val("");
      $(".chat").scrollTop(1000);
      if (!is_finished) {
        $('#writing-span').fadeIn();
      }
      steve();
    }
  }
});

$('#chat-button').on('click', function(e) {
  e.preventDefault();
  if ($('#chat-message').val()) {
    entered = $('#chat-message').val();
    $('.chat').append(GenerateUserMessage(entered))
    $('#chat-message').val("");
    $(".chat").scrollTop(1000);
    if (!is_finished) {
      $('#writing-span').fadeIn();
    }
    steve();
  }
})

function steve_write(msg) {
  $('#writing-span').fadeOut();
  $('.chat').append(GenerateMessage(msg))
  $(".chat").scrollTop(1000);
}
/*
function steve() {
  switch ($('.user-chat-container').length) {
    case 1:
      setTimeout(function() {
        steve_write("What a nice name! I have automatically created a username based on it. Do you like it? (yes/no)</p><p>" + entered.toLowerCase().replace(" ", ".") + "</p>");
      }, 1000);
      break;
    case 2:
      setTimeout(function() {
        if (entered.toLowerCase().indexOf("yes") >= 0) {
          steve_write("I'm glad you like it! Now, I need a very secure password of you. Got one in your mind or should I generate one for you? (yes/no)");
          at_password = true;
        } else {
          steve_write("Oh... :( Well, do you want to tell me your pick?");
        }
      }, 1000);
      break;
    case 3:
      setTimeout(function() {
        if (at_password) {
          if (entered.toLowerCase().indexOf("yes") >= 0) {
            steve_write("Okay, I generated a password for you. Write it down and keep it somewhere save!</p><p>The password is: NeVertRustARoBot!");
            steve_write("And that's about all. See you at the login! :)")
            is_finished = true;
          } else {
            steve_write("Would you mind telling it to me?");
          }
        } else {
          steve_write("That's even better than my suggestion! Now, I need a very secure password of you. Got one in your mind or should I generate one for you? (yes/no)");
        }
      }, 1000);
      break;
    case 4:
      setTimeout(function() {
        if (at_password && !is_finished) {
          steve_write("Got it :) And that's about all. See you at the login!")
          is_finished = true;
        } else {
          if (entered.toLowerCase().indexOf("yes") >= 0 && !is_finished) {
            steve_write("Okay, I generated a passwort for you. Write it down and keep it somewhere save!</p><p>The password is: NeVertRustARoBot!");
            steve_write("And that's about all. See you at the login! :)")
            is_finished = true;
          } else {
            if (!is_finished) {
              steve_write("Would you mind telling it to me?");
            }
          }
        }
      }, 1000);
      break;
    case 5:
      setTimeout(function() {
        if (!is_finished) {
          steve_write("Got it :) And that's about all. See you at the login!")
          is_finished = true;
        }
      }, 1000);
      break;
  }
}
