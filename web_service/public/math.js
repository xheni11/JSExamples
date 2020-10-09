/* $(document).ready(function () {
    $('#btnAdd').on('click',add);
    $('#divResult').css("display","none");
  }) */
var btn=document.getElementById("btnAdd");
btn.addEventListener('click',add);
function add(){
    var x=document.getElementById('number1').val();
    var y=document.getElementById('number2').val();
    var result=document.getElementById('result').val();
    var xhtml=new XMLHttpRequest();
    xhtml.open('GET','/?x='+x+'&y='+y+'',false);
    xhtml.send();
    var jsonResponse=JSON.parse(xhtml.response);
    result.innerHtml=jsonResponse.result;
}

function addAjax(){
  var x=document.getElementById('number1').val();
  var y=document.getElementById('number2').val();
  var data={x:x,y:y};
  $.ajax({
    url:'/addition',
    data:data,
    type:'GET', 
    dataType:'json',
    cache:false,
    success:function (data) {
      document.getElementById('result').val(data.result);
    },
    error:function (data){
      alert(data.error);
    }

  });
}
//Start Improved code
function getFormData(){
  var x=document.getElementById('number1').val();
  var y=document.getElementById('number2').val();
  var data={x:x,y:y};
  return JSON.stringify(data);
}

function serverAddition(data){
  return $.getJSON('/addition',data)
}

function displayResult(servderData){
  document.getElementById('result').val(serverData.result);
}

function addNumbers(){
  var data=getFormData();
  serverAddition(data).done(displayResult).fail(displayError);
}

function displayError(serverData,error){
  alert(error);
}
//End 