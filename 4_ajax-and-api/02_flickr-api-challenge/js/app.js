$(document).ready(function() {

  /* Replace button click event with form submit event */
  $('form').submit(function(event) {
    event.preventDefault(); // prevents browser-default behaviour
    let flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    let inputValue = $('#search').val(); // retrieve value typed in the input field
    //console.log(inputValue);

    let options = {
      tags: inputValue,
      format: 'json'
    };

    function displayPhotos(data) {
      let photoHTML = '<ul>';
      $.each(data.items, function(index, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    } // end display photos

    $.getJSON(flickrAPI, options, displayPhotos);
  }); // end form
}); // end ready
