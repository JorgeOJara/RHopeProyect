var express = require('express');
var bodyparser = require("body-parser");



var app  = express();

app.get('/',(request,response)=>{
	console.log('there its a request');
    response.send('leave me alone..bitch')
})

app.listen('80',()=>{
	 console.log('server its running...')
})