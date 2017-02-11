'use strict';
const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.single('userFile'), function(req, res){
  res.json({size: req.file.size});
});

app.listen(process.env.PORT || 8080, function(){
  let port = process.env.PORT || 8080;
  console.log('app listening on port', port);
});