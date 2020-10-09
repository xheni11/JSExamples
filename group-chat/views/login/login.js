$(document).ready(function(){    
   $('#loginBtn').on('click',onLoggin);
});

function onLoggin(){
    if(existsUsername($('#usernameTxt').val())){
        document.getElementById('loginForm').action='/chat';
    }
    else{
        alert("An error ocured!");
    }
}
 