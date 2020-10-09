/* i = 0;
while (i < 5) {
    postMessage("Web Worker Counter: " + i);
    i++;
}  */

onmessage=e=>{
    if (e.data.length!=0){
        postMessage(e.data.length);
    }
}
