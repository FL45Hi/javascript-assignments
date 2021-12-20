// js is loosely typed langauge

"use strict"

x = 1;      // error, use of undefined var

var for = 10;  // error, use of reserve words
var if = 10;

var myObj = { myProp: 10, myProp: "strict mode"}    //error, duplicate property names

function sum(val, val) { 
    return val + val;       //error, duplicate parameter 
}

var arr = [ 1, 2, 3, 4, 5];
arr.length = 10;    //err, read-only length props

function sum(val1, val2) {
    arguments = 100;    // modify arguments object
}