const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // Since the json data is a string...
    const employees = JSON.parse(xhr.responseText); // takes a string and converts it to a JavaScript object

    /* Processing JSON data
    * 1. Create a new HTML list item (<ul>)
    * 2. Check the "inoffice" property (0 = out; 1 = in)
    * 3. Get the value for the "name" property; Insert it inside the <li> tag (use dot notation)
    * 4. Close the <li> tag
    */

    let statusHTML = '<ul class="bulleted">';
    for (let i = 0; i < employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

xhr.open('GET', 'data/employees.json');
xhr.send();

/* Challenge -- Show room status */
const roomRequest = new XMLHttpRequest();

roomRequest.onreadystatechange = function() {
  if(roomRequest.readyState === 4 && roomRequest.status === 200) {
    const rooms = JSON.parse(roomRequest.responseText);
    let roomStatus = '<ul class="rooms">';
    for (let i = 0; i < rooms.length; i += 1) {
      if (rooms[i].available === true) {
        roomStatus += '<li class="empty">';
      } else {
        roomStatus += '<li class="full">';
      }
      roomStatus += rooms[i].room;
      roomStatus += '</li>';
    }
    roomStatus += '</ul>';
    document.getElementById('roomList').innerHTML = roomStatus;
  }
};

roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();
