function existsUsername(username){
    var users=getUsername();
    for(var i=0;i<users.length;i++){
        if(users[i]==username){
            return true;
        }
    }          
    return false;
}

function setUsername(username){
    var users=getUsername();
    users.push(username);
    window.localStorage.setItem("username",JSON.stringify(users));
}
function getUsername(){
    var userJs=window.localStorage.getItem("username");
    return userJs?JSON.parse(userJs):[];
}

function removeUsername(){
    window.localStorage.removeItem("username");
}

