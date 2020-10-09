var notificWorker = new Worker("notificWorker.js");
var listWorker=new Worker("listWorker.js");
var list=["Student1","Student2","Student3"];


$(document).ready(()=>{
  notificWorker.postMessage(list);
  postNrNotification();
  $('#notificationBtn').on('click',endWorkerNrNot);

});

function postNrNotification(){
  notificWorker.onmessage=function(e){
    $('#spanNot').append(e.data);
  }   
}

function endWorkerNrNot(){
  listWorker.postMessage(list);
  listWorker.onmessage=function(e){
    $('#divNot').append(e.data);
  }
  $('#spanNot').hide();
}

