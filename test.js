const io = require('socket.io-client');
const socket = io('https://online-conference-307675718d60.herokuapp.com/'); // Your Socket.IO server URL

socket.on('connect', () => {
  console.log('Connected to server');
  
  // Emit a test message
  socket.emit('test-event', 'Hello, server!');
});

socket.on('test-event-response', (data) => {
  console.log('Received from server:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
