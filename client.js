const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });
  
  conn.on('connect', () => {
    console.log('Successfuly connected to the game server!')
  });
  
  conn.on('connect', () => {
    conn.write('Name: L13 Move');
    // conn.write('Move: up');
    // setInterval(function(){conn.write('Move: up')}, 50);
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};


module.exports = {
  connect: connect
}