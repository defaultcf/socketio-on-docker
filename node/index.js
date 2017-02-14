const io = require('socket.io').listen(8080);

io.on('connection', (socket) => {
  socket.broadcast.emit('login', {value: "誰かが入室しました"});

  socket.on('fav', () => {
    io.emit('fav', {value: "┌（┌ ＾o＾）┐ﾌｧﾎﾞｫ..."});
  });
});
