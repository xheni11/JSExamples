var info=" ";
onmessage=e=>{
    for(var i=0;i<e.data.length;i++){
        this.info+=e.data[i]+" ";
    }
    postMessage(this.info);
}
