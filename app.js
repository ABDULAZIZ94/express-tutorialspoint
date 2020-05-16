const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const cookieParser = require('cookie-parser');
const upload = multer();
const app = express()
const port = 80
const host = '0.0.0.0'

app.use(cookieParser());
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
 app.get('/', function(req, res){
  // res.cookie('name', 'express').send('cookie set'); //Sets name = express
  // res.cookie('name', 'value', {expire: 360000 + Date.now()});
  res.cookie('style', 'hard', {maxAge: 360000}).send('cookie set');
  });
  app.get('/clear_cookie', function(req, res){
    res.clearCookie('name');
    res.send('cookie name cleared');
 });
app.listen(port, host,() => console.log(`Example app listening at http://${host}:${port}`))