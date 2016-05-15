var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var options = {
  root: __dirname + '/production/',
};
  res.sendFile('index.html', options);
});

app.use(express.static('production'));

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
