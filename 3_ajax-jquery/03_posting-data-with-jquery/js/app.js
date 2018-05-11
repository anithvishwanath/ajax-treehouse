$(document).ready(function() {

  $('form').submit(function(evt) {
    evt.preventDefault();
    var url = $(this).attr("action");
    var formData = $(this).serialize();
    $.post(url, formData, function(response) {
        $('#signup').html("<p>Thanks for signing up!</p>");
        
    }); // end post
  }); // end submit
}); // end ready
