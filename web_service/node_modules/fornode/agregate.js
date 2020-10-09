var path=require('path');
var fs=require('fs');
var lib=path.join(path.dirname(fs.realpathSync(__filename),'./forNode'));
var simple=require(lib+'/simple_math.js');
module.exports={
    addition:simple.addition,
    substraction:simple.substraction
}