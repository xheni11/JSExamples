
const io=require('./chat-server');
const port=8082;
io.app.setRoutes();
io.sockets();
io.server.listen(port,function(){
    console.log('listening on '+port+'...');
});
