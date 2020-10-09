const app = require('./router');
const server = require('http').Server(app.app);
const io = require('socket.io')(server);
function sockets() {
  io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
      if (username && username != null && username != '') {
        socket.username = username;
        io.emit('is_online', '<i>' + socket.username + ' join the chat...</i>');
      }
    });

    socket.on('disconnect', function() {
      io.emit('is_offline', ' <i>' + socket.username + ' left the chat...</i>');
    });

    socket.on('chat_message', function(message) {
      io.emit(
        'chat_message',
        '<strong>' + socket.username + '</strong>: ' + message
      );
    });
  });
}
module.exports = { app, server, io, sockets };
