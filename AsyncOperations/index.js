const express = require('express');
const app = express();
const port = 8091;
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/pubic/views/home.html');
});

app.listen(port, () => {
  console.log('Listening to port ' + port + ' ...');
});
