var socket = io.connect('http://localhost:8082');
credentials.username=getUsername();
$(document).ready(function(){
    socket.emit('username',credentials.username);
    $('form').submit(function(e){
        e.preventDefault();
        socket.emit('chat_message',$('#messageTxt').val());
        $('#messageTxt').val('');
        return false;
    });
    $('#logoutBtn').on('click',onLoggout);
});

socket.on('chat_message',function(msg){
    $('#messages').append($('<li>').html(msg));
});

socket.on('is_online',function(username){
    $('#messages').append($('<li class="online">').html(username));
});


socket.on('is_offline',function(username){
    $('#messages').append($('<li class="offline">').html(username));
});


function onLoggout(){
    removeUsername();
}