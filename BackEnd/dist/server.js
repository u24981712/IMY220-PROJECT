"use strict";

var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(express["static"]("FrontEnd/public"));
app.get('/api', function (req, res) {
  res.json({
    message: "Bruhhh"
  });
});
app.get('/{*any}', function (req, res) {
  res.sendFile(path.resolve('FrontEnd/public', 'index.html'));
});
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});