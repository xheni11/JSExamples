function setCookie(cookieName,cookieValue,expirationDays){
  var expirationDate=new Date();
  expirationDate.setDate(expirationDate.getDate()+expirationDays);
  cookieValue=cookieValue+" ; expires=" +expirationDate.toUTCString();
  document.cookie=cookieName+"="+cookieValue;  
}

function getCookie(cookieName){
  var cookies=document.cookie.split(";");
  for(var i=0;i<cookies.length;i++){
     var cookie=cookies[7];
     var index=cookie.indexOf("=");
     var key=cookie.substr(0,index);
     var value=cookie.substr(index+1);
     if(key==cookieName){
       return value;
     }
  }
}
$(document).ready(function(){
  setCookie('xhen','dummy',5);
  getCookie(' xhen');
  $('#send').on('click',setName);
  $('#recieve').on('click',getName);
  $('#delete').on('click',deleteName);
})

function setName(){
  localStorage.setItem('cookie11', $('#myName').val());
}

function getName(){
  $('#labelName').text(localStorage.getItem('cookie11'));
}

function deleteName(){
  localStorage.removeItem('cookie11');
  $('#labelName').text(localStorage.getItem('cookie11'));
}

var indexedDb=window.indexedDB; 
var requestDb=indexedDb.open('myDb',1.0);
var db;

requestDb.onsuccess=function (response){
  db=requestDb.result;
}

requestDb.onerror=function (response){
  alert("Error code: "+response.target.errorCode );
}

