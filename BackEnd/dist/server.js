"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var PORT = 3000;
app.use(_express["default"]["static"]("FrontEnd/public"));
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});