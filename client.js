const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on('connect', () => {
    console.log('Successfuly connected to the game server!');
  });
  
  conn.on('connect', () => {
    conn.write('Name: L13 Move');
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};


module.exports = {
  connect
};