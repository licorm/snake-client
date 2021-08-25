//declaring constants used
const IP = '135.23.223.133';
const PORT = '50542';
const keyMapping = {
  w : 'Move: up',
  a : 'Move: left',
  s : 'Move: down',
  d : 'Move: right',
  j : 'Say: sup',
  k : 'Say: hek',
  l : 'Say: fun',
  h : 'Say: yip'
};

//export our constants
module.exports = {
  IP,
  PORT,
  keyMapping
};