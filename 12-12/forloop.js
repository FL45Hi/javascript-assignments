// for-of : looping through the values of an iterable objects.
// can directly use the values instead of using index on that array or the string

var items = [1,2,3]



// using simple for loop
for(var i = 0; i < items.length; i++) {
    console.log(items[i]) // 1, 2, 3
}
// using for-of loop
for(var x of items) {
    console.log(x) // 1, 2, 3
}

// using for-in loop
for (var x in items) {
    console.log(items[x])   //1, 2, 3
}




items = {a: "immortal", b: 2};

// using for-in loop
for (var x in items) {
    console.log(items[x])   //1, 2, 3
}