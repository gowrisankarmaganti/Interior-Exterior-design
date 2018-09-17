const express = require('express');
const httpModule = require('http');
var bodyParser = require('body-parser');
let app = express();
let http = httpModule.createServer(app);
var path = require('path');
app.use(bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' }));
app.use(bodyParser.urlencoded(bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' })));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',function(req,res){
    
    res.send("calling node server !")
})
app.post('/register',function(req,res){
    console.log(req.body)
    let resp = req.body;
    res.send("successfully submitted form")
})




http.listen(process.env.PORT || 1226);
console.log("Server started");