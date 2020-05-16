const express = require('express')
const app = express()
const port = 80
const host = '0.0.0.0'

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
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
app.listen(port, host,() => console.log(`Example app listening at http://${host}:${port}`))