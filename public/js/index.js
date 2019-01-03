let socket = io();

socket.on('connect', function() {
  console.log('Connected to the server');

  socket.emit('createMessage', {
    from: 'Kankana',
    text: 'Hey there, I am Ebran'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function(message) {
    console.log('New Message', message);
});
