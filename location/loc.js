var idWatch=0;

function verifyLocation(){
if('geolocation' in navigator){
	return true;
}
	return false;
}

function getPosition(){
	if(verifyLocation()){
		idWatch=navigator.geolocation.watchPosition(onSuccess(),onError());
	}
	else{
		alert('Geolocation not suported');
	}
}
	
function onSuccess(position){
	alert('latidute: '+position.latidute+',longtidute: '+position.longtitude);
	
}

function onError(){
	alert('Smth went wrong');
}

function endMonitoringPosition(){
if(idWatch!==0){
	navigator.geolocation.clearWatch(idWatch);
	idWatch=0;
	
}
alert('Moniotring position ended');
}
