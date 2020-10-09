const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 808;

server.listen(port, function() {
  console.log('redirecting to ' + port);
  let arr = [1, 2, 3];
  reverseArray(arr);
});

function reverseArray(arr) {
  arrReverse = [];
  for (let i = arr.length - 1; i > 0; i--) {
    arrReverse.add(arr[i]);
  }
  return arrReverse;
}
