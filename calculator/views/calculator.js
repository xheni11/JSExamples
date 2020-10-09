var input;
var display;
var result=0;
var action;

function initialize(){
  for(var i=0;i<10;i++){
    $('#number'+i).on('click',numberClick);
  }
  input=document.getElementById('input');
  display=document.getElementById('display');
  $('#plus').on('click',plusClick);
  $('#minus').on('click',minusClick);
  $('#clear').on('click',clearClick);
  $('#multiplication').on('click',multiplicationClick);
  $('#division').on('click',divisionClick);
  $('#result').on('click',resultClick);
}

function numberClick(){
    input.value=input.value=='0'?
    this.innerText:input.value+this.innerText;
    result=String(result)+this.innerText;
}

function plusClick(){
  display.value=Number(display.value)+Number(result);
  input.value=input.value+'+';
  result=0;
  action="+";
}

function minusClick(){
  display.value=Number(display.value)-Number(result);
  input.value=input.value+'-';
  result=0;
  action="-";
}

function multiplicationClick(){
  display.value=Number(display.value=='0'?1:display.value)*Number(result);
  input.value=input.value+'*';
  result=0;
  action="*";
}

function divisionClick(){
  display.value=Number(result);
  input.value=input.value+'/';
  result=0;
  action="/";
}

function resultClick(){
    switch(action){
      case "+":
        display.value=Number(display.value)+Number(result);
        result=0;
        break;
      case "-":
        display.value=Number(display.value)-Number(result);
        result=0;
        break;
      case "*":
        display.value=Number(display.value)*Number(result);
        result=0;
        break;
      case "/":
        display.value=Number(display.value)/Number(result);
        result=0;
        break;
      default:
        alert("Error");
        break;
    }
    result=0;

}
function clearClick(){
  input.value="0";
  display.value="0";
}

$(document).ready(function(){
  initialize();
})
