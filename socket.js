// socket 관련 
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user is now connected');
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  });
};
