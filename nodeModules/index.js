var express = require('express');
var app = express();
var formidable = require('formidable');
var math = require('./math');
const port = 8084;
app.use(express.static(__dirname));
app.get('/', function(request, response) {
  response.redirect('home.html');
});

app.post('/addition', function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(request, function(err, fields) {
    var result = math.addition(fields.x, fields.y);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(html);
    res.end('{ "result": ' + result + '}');
    console.log('Handeld req..');
  });
});
app.listen(port, () => {
  console.log('listening to ' + port);
});
