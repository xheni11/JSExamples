const express=require('express');
const app=express();
var passport = require('passport');

function setRoutes(){
    app.use(express.static(__dirname+'/views'))
    app.get('/',function(request,response){
        response.set({'Content-TypeError':'text/javascript'});
        response.render('login.ejs');        
    });
    app.get('/login',function(request,response){
        response.render('login.ejs');
    });

    app.get('/chat',function(request,response){
        response.render('chat.ejs');
    });

    app.get('/home',function(request,response){
        response.render('home.ejs');
    });

    app.get('/register',function(request,response){
        response.set({'Content-TypeError':'text/javascript'});
        response.render('register.ejs');
    });
}

module.exports={app,setRoutes};