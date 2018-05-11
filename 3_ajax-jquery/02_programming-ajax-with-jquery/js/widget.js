// Only required if JS is included in the head of the document
$(document).ready(function() {
  var url = '../data/employees.json';
  $.getJSON(url, function(response) {
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee) { // (index, value); gets array elements
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    }); // end each
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); // end getJSON for employees

  /* Challenge (Stage 3) */
  $.getJSON('../data/rooms.json', function(response) {
    var roomStatus = '<ul class="rooms">';
    $.each(response, function(index, roomNum) {
      if (roomNum.available === true) {
        roomStatus += '<li class="empty">';
      } else {
        roomStatus += '<li class="full">';
      }
      roomStatus += roomNum.room + '</li>';
    }); // end each room
    roomStatus += '</ul>';
    $('#roomList').html(roomStatus);
  }); // end getJSON for rooms
}); // end ready
