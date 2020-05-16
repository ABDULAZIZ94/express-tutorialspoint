const express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer');
var upload = multer();
const app = express()
const port = 80
const host = '0.0.0.0'

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
// for parsing multipart/form-data
app.use(upload.array()); 
 //Route handler
 app.get('/', function(req, res, next){
    res.render('index');
    next();
 });
 app.get('/dynamic_view', function(req, res){
  res.render('dynamic',{
    user: null
  });
});
app.get('/components', function(req, res){
  res.render('content');
});
app.post('/', function(req, res){
  console.log(JSON.stringify(req.body));
  res.send("recieved your request!");
});
app.listen(port, host,() => console.log(`Example app listening at http://${host}:${port}`))