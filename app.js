const express = require('express')
const app = express()
const port = 80
const host = '0.0.0.0'

app.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });

app.listen(port, host,() => console.log(`Example app listening at http://${host}:${port}`))