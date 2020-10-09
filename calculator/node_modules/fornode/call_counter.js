var internal_counter=0;
function countCall(){
    ++internal_counter;
    console.log("You have made "+internal_counter+" calls!");
}
module.exports=countCall;