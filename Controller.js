var express = require('express')
require('marko/node-require'); //allow requiring templates

var app = express()

let homeTpl = require('./views/create.marko');
let viewsTpl = require('./views/index.marko');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use('/views', express.static('views'))


app.get('/', function(req,res){
  homeTpl.stream().pipe(res);
});

app.post('/', function(req,res){
  viewsTpl.stream().pipe(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
