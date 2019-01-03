const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

let { generateMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connected');

  socket.emit(
    'newMessage',
    generateMessage('Admin', 'Welcome to the chat app')
  );

  socket.broadcast.emit(
    'newMessage',
    generateMessage('Admin', 'New User Joined')
  );

  socket.on('createMessage', message => {
    console.log('Create Message', message);

    io.emit('newMessage', generateMessage(message.from, message.text));

    // socket.broadcast.emit(
    //   'newMessage',
    //   generateMessage(message.from, message.text)
    // );
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`The server is started on the port ${port}`);
});
