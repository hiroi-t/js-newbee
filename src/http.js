//server.js
require('date-utils');
var dt = new Date();
var formattedDate = dt.toFormat("YYYY/MM/DD HH24:MI:SS");
var http = require('http'); //httpモジュールのインポ
var server = http.createServer();　
var settings = require('./settings.js');
console.log(settings); 
server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/JSON; charset=UTF-8'});　
  res.end(JSON.stringify({'status': "OK", "now": formattedDate})); //resの中身_を出力
})
server.listen(settings.port,settings.host)
