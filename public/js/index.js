let socket = io();

socket.on('connect', function() {
  console.log('Connected to the server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function(message) {
  console.log('New Message', message);

  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit(
    'createMessage',
    {
      from: 'User',
      text: jQuery('[name=message]').val()
    },
    function() {}
  );
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported in your browser');
  }

  navigator.geolocation.getCurrentPosition(
    function(position) {
      console.log('Sending the location');
      console.log(position);
    },
    function() {
      alert('Unable to fetch location');
    }
  );
});
