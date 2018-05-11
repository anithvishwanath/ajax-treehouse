$(document).ready(function() {
  $('button').click(function() {
    $('button').removeClass("selected"); // remove selected class for each button
    $(this).addClass("selected"); // this refers to ONLY the button the user clicks

    /* AJAX stuff */
    let flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    let animal = $(this).text();
    let flickrOptions = {
      tags: animal,
      format: 'json'
    };

    function displayPhotos(data) {
      let photoHTML = '<ul>';
      $.each(data.items, function (index, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }

    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  }); // end click
}); // end ready
