$(document).ready(function(){    
    $('#registerBtn').on('click',onRegister);
 });
 
 function onRegister(){
     var username=$('#usernameTxt').val();
     if(!existsUsername(username)){
        setUsername(username);
     }
     else{
         alert('This user exists!');
     }
 }
  