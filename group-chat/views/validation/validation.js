function validationRequired(inputName,message){
   if($('#'+inputName).val().length==0){
    $('#'+inputName).append($('<label>').html(message+ "ir required. Please fill in!"));
    return false;
   }
   return true;
}