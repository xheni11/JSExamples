const express=require('express');
const app=express();
const server=require('http').Server(app);
const port=8080;
app.use(express.static(__dirname+'/views'));
app.get('/',function(request,response){
    response.set({'Content-TypeError':'text/javascript'});
    response.render('calculator.ejs');
});

server.listen(port,function(){
    console.log('redirecting to '+port); 
});
