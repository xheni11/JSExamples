function add() {
  var x = document.getElementById('x').value;
  var y = document.getElementById('y').value;
  var result = document.getElementById('result');
  var xmlhttpReq = new XMLHttpRequest();
  xmlhttpReq.open('GET', '/addition?x=' + x + '&y=' + y, false);
  xmlhttpReq.send();
  var xmlDoc = xmlhttpReq.response;
  var json = JSON.parse(xmlDoc);
  result.innerHTML = json.result;
}

console.log('hey');
document.getElementById('btnAdd').addEventListener('click', add);
