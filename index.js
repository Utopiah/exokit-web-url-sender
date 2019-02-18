var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var path = require('path');
var shell = require('shelljs');

var mypath = "/home/fabien/ml019/tools/mldb"
var mycommand = './mldb.exe terminate com.webmr.exokit ; ./mldb.exe launch com.webmr.exokit -v "ARGS=node --experimental-worker . '
// could also need to add the .x webxr parameter when need be, e.g. AFrame 0.9

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.get('/snippet.js', function(req, res){
  console.log(req.connection)
  var baseURL = req.connection.remoteAddress.replace(/.*:/,"")
  if (baseURL == "1") baseURL = "localhost"
  var address = `http://${baseURL}:${req.connection.localPort}/`
  var codesnippet = `
window.addEventListener("load", () => {
  var targetURL = "${address}";
  var imgEl = document.createElement("img");
  imgEl.id = "send-to-ml";
  imgEl.src = "https://holo-one.com/static/image/Logos/magic_leap.png";
  imgEl.style.position = "absolute";
  imgEl.style.bottom = "10px";
  imgEl.style.left = "10px";
  imgEl.style.width = "22px";
  imgEl.style.height = "22px";
  imgEl.style.zIndex = "100";
  imgEl.alt = "Send to MagicLeap";
  imgEl.title = "Send to MagicLeap";
  imgEl.onclick = () => { window.open(targetURL + "?url=" + window.location) };
  console.log( imgEl );
  document.body.appendChild( imgEl );
});`
  res.send(codesnippet)
});


app.get('/send', function(req, res){
  res.send('url: ' + req.query.url);
});

app.post('/myaction', function(req, res) {

  shell.cd(mypath)
  var p = shell.exec('pwd')
  console.log(p)
  var myres = shell.exec(mycommand + req.body.name + '"')
  res.send('You requested the URL "' + req.body.name + '". The result is' + myres.stdout + myres.stderr);

});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/ and beyond');
});
