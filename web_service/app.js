var express=require('express');
var app=express();
var formidable=require('formidable');
var math=require('forNode/agregate');
app.use(express.static(__dirname+'/public'));
app.get('/',function(request,response){
    var x=Number(request.query.x);
    y=Number(request.query.y);
    result=math.addition(x,y);
    objResult={result:result};
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end(JSON.stringify(objResult));
    console.log("handling request..");
    
});
var port=8081;
app.listen(port,'localhost');
console.log("Listening to localhost:808");
