const express=require('express');
const app=express();
const server=require('http').Server(app);
const port=8083;

app.use(express.static(__dirname+'/views'))
app.get('/',function(request,response){
    response.set({'Content-TypeError':'text/javascript'});
    response.render('default.ejs');        
    });

server.listen(port,function(){
    console.log('listening on '+port+'...');
});
