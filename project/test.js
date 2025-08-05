
function a(){
    console.log("a is called for second time");
}
console.log("first is "  , +a());
var a = function (){
    console.log("a is called for first time");
}
console.log("first is "  , +a());






console.log("first is "  , +a());
var a = function (){
    console.log("a is called for first time"); //varible a 
}
function a(){
    console.log("a is called for second time");  // named function
}
console.log("second is ", +a());


// memeory phase - for line 17 - a- undefined  line 20 - while function - parsing is done 
// go to code phase. -  line 16 - "first is ,+a()" - till full line execute we gets the function call - 
// so we get 
// op 1 - a is called for second time. - in line 1 
// op 0 - first is NaN - (NaN coz - when we try to convert a is called for second time into Number it gives NaN)

// go to line 23 - 
// op 3 - a is called for first time -  coz var a overwrite the value of a 
// op 4 - second is NaN
  
