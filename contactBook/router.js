const express=require('express');
const app=express();
function setRoutes(){
    //app.use(express.static(__dirname+'/views'))
    app.get('/',function(request,response){
        response.set({'Content-TypeError':'text/javascript'});
        response.render('default.ejs');        
    });
}

module.exports={app,setRoutes};