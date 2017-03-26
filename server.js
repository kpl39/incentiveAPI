var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var promise = require('bluebird');
// var AWS = require('aws-sdk');
// var fs = require('fs');

var PORT; 

if (process.env.PORT) {
	PORT = process.env.PORT; 
} else {
	PORT = 3000; 
}

var app = express(); 
var server = http.createServer(app); 

app.use(bodyParser.json()); 
app.use(express.static(__dirname));

var pgp = require('pg-promise')(options);

//DB connetion for Heroku 
if (process.env.DATABASE_URL) {
  connectionString = process.env.DATABASE_URL + '?ssl=true';
} else {
  connectionString = 'postgres://localhost:5432/fastask'
}

//DB Connection for AWS RDS 
var dbConnection = {
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME
}

//use connectionString for Heroku 
var db = pgp(dbConnection);



 var respondWithData = function(res, message) {
    // console.log('**RESPOND WITH DATA**', message, res)
    return function(data) {
      console.log('DATA', data);
      res.status(200)
      .jsonp({
        status: 'success',
        data: data,
        message: message
      });
    }
  };

 var postData = function(res, message) {
    return function() {
      res.status(200)
        .json({
          status: 'success',
          message: message
        });
    }
  };


 var catchError = function(next) {
    return function(err){
      console.log(err);
      return next(err);
    };
  };

  app.get('/api/test', function(req, res, next) {
    res.status(200).jsonp("JSONP is working")
  });

  app.get('/api/getusers/', function(req, res, next) {
    db.any('select * from users;')
      .then(respondWithData(res, 'usernames'))
      .catch(catchError)
  })


 server.listen(PORT, function(){
    console.log('Server Listening on Port:' + PORT);
  })

