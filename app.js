const express = require('express')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express()
const port = 80
const host = '0.0.0.0'

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(port, host,() => console.log(`Example app listening at http://${host}:${port}`))