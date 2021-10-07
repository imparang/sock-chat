// socket 관련 
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user is now connected');

    socket.on('chat message', (msg) => {
      // 브로드 캐스팅 방법 (서버에 연결된 모든 사용자에게 뿌림)
      io.emit('chat message', msg);
      console.log("message: ", msg);
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  });
};
