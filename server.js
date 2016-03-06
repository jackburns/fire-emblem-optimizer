var express = require('express');
var path = require('path');
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction);
var port = "80";
var publicPath = path.resolve(__dirname, 'public');

// We point to our static assets
app.use(express.static(publicPath));

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
