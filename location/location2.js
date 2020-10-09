var idWatch = 0;
function verifyGeiolocation() {
  return 'geolocation' in navigator;
}

function showMessage(lat, long) {
  $('#display').val('Latitude:' + lat + '\n Longditude: ' + long);
}
function watchPosition(position) {
  showMessage(position.latitude, position.longtitude);
}
function getLocation() {
  if (verifyGeiolocation) {
    idWatch = navigator.geolocation.watchPosition(watchPosition);
  } else {
    alert('Geoposition not suported by browser!');
  }
}

function onEnd() {
  if (idWatch != 0) {
    navigator.geolocation.clearWatch(idWatch);
    idWatch = 0;
    showMessage('End of monitoring!');
  }
}

$(document).ready(function() {});
