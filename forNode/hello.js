var http=require('http');
var url=require('url');
var math=require('./agregate.js');
function start(){
	http.createServer(function(request,response){
		var url_parts=url.parse(request.url,true);
		response.writeHead(200,{'Content-type':'text/plain'});
		response.end("Hello"+ math.addition(3,4));
		console.log("hanling request");
	}).listen(8080,'localhost');	
}
exports.start=start;