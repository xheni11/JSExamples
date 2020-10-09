const express=require('express');
const app=express();
const port=3001;
app.use(express.static(__dirname+'/views'));

app.get('/',(req,res)=>{
    res.render('worker.ejs');
});

app.listen(port,()=>{
    console.log('listening to '+port);
});