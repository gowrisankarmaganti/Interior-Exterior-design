const express = require('express');
const httpModule = require('http');
var bodyParser = require('body-parser');
let app = express();
let http = httpModule.createServer(app);
var path = require('path');
var cookieParser = require('cookie-parser');
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Apple#123',
    database: 'interior'
  })
app.use(bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' }));
app.use(bodyParser.urlencoded(bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' })));
app.use(cookieParser());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/call',function(req,res){
    connection.query("call GetClient()",function(err, rows, fields){
        res.send(err)
    })
})
app.post('/register',function(req,res){
    // console.log(req.body)
    let clientObj = req.body;
    // console.log(clientObj.name, clientObj.email)
    connection.query("call registerClient(?, ?, ?, ?, ?, ?, ?, ?, ?, ? )", [null, clientObj.name, clientObj.password, clientObj.email, clientObj.mobile,  clientObj.profileImage, clientObj.location, clientObj.state, clientObj.pincode,1], function (err, rows, fields) {
        if(!err){
            res.send({name:clientObj.name, email:clientObj.email,mobile:clientObj.mobile})
        }
        else {
            res.send(err)

        }
    })
    
})




http.listen(process.env.PORT || 1226);
console.log("Server started");