var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var path = require('path');
var shell = require('shelljs');

var mypath = "/home/fabien/ml019/tools/mldb"
var mycommand = './mldb.exe terminate com.webmr.exokit ; ./mldb.exe launch com.webmr.exokit -v "ARGS=node --experimental-worker . '
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.post('/myaction', function(req, res) {

  shell.cd(mypath)
  var p = shell.exec('pwd')
  console.log(p)
  var myres = shell.exec(mycommand + req.body.name + '"')
  res.send('You requested the URL "' + req.body.name + '". The result is' + myres.stdout + myres.stderr);

});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
