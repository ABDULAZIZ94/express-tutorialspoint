const express = require('express')
const app = express()
const port = 80
const host = '0.0.0.0'

//First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
 });
 
 //Route handler
 app.get('/', function(req, res, next){
    res.send("Middle");
    next();
 });
 
 app.use('/', function(req, res){
    console.log('End');
 });
app.listen(port, host,() => console.log(`Example app listening at http://${host}:${port}`))