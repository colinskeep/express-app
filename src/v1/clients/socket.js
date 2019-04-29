module.exports = (io) => {
  const socketUsers = [];
  io.on('connection', (socket) => {
    const client = {socketId: socket.conn.id, jwt: socket.handshake.query.jwt};
    socketUsers.push(client);
    socket.on('disconnect', () => {
      for ( let i = 0; i < socketUsers.length; i++) {
        if ( socketUsers[i].socketId === socket.id) {
          socketUsers.splice(i, 1);
        }
      }
    });
  });
};
