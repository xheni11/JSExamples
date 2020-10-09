var idWatch=0;
function showMessage(message){
  $('#display').text(message);
}

function verifyGeolocation(){
  return 'geolocation' in navigator;
}

function showPosition(position){
  var dateTime=new Date(position.timestamp).toLocaleString();
  showMessage("Latitude: "+position.latitude+"  Datetime: "+dateTime);
}

function getLocation(){
  if(verifyGeolocation){
   idWatch= navigator.geolocation.watchPosition(showPosition);
  }
  else{
    showMessage("Geolocation not supported!");
  }
}


function endMonitoring(){
  if(idWatch!=0){
   navigator.geolocation.clearWatch(idWatch);
  }
  idWatch=0;
  showMessage("End of monitoring!")
}
$(document).ready(function(){
  $('#startMonitoring').on('click',getLocation);
  $('#endMonitoring').on('click',endMonitoring);
  })


function getLocationForMap(){
  if(verifyGeolocation){
    idWatch= navigator.geolocation.getCurrentPosition(showPositionMap);
  }
  else {

  }
}

