var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var assert = require('assert')
var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  const url = "mongodb://localhost:27017/something";
  mongoose.connect(url)
  var Schema = mongoose.Schema;
  var block  = new Schema({
        UserName:String,
        email:String,
        password:String,
        address:String,
        city:String,
        zip:String
  })
  var obj = mongoose.model('costumers',block)

  var content = new obj();

///bodyparser medleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.post('/logIn',(request,response)=>{
      var email  = request.body.email;
      var pass = request.body.password;
      console.log(request.body);
      console.log(email);
      console.log(pass);
      obj.find({email:email,password:pass},(error,content)=>{
            if(error){
                  console.log('printing error...');
            }else if(content.length >  0){
                  var done = true;
                  console.log('its exists');
                response.send(done);
            }
            console.log('done...');
      })

})
app.post('/createaccount',(request,response)=>{
    var username = request.body.username;
    var email = request.body.email;
    var password = request.body.password;
    var secondPass = request.body.password2;
    var addres = request.body.adress;
    var city = request.body.city;
    var zip  = request.body.zip;
     if(email.length >= 5){
       if(username.length >= 4){
            if(password == secondPass && password.length >= 5){
                  content.username = username;
                  content.email = email;
                  content.password =password;
                  content.address = addres;
                  content.city = city;
                  content.zip = zip;
                  content.save(function(err){
                        if(err){
                                console.log('something its Wrong...');
                               var content = {
                                     "done":false
                               }
                                response.send(content);
                        }else{
                               console.log('its all saved....');
                               var content = {
                                    "done":true
                              }
                               response.send(content);
                        }
                  })
      
            }else{
                  console.log('passwords are not the same....');
            }   
     }else{
           console.log('username its Not Submited');
     }
    }else{
        console.log('email its empy') 
    }
       
})
app.listen('4000',()=>{
      console.log('server its running.second..')
})