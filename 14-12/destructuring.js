//list matching 
let [a, b] = [1, 2];

console.log(a)  //1
console.log(b)  //2




// Object Matching
let { b, a } = {
    a: 1,
    b: 2
}

console.log(a)  //1
console.log(b)  //2

var { op: a, lhs: {op: b}, rhs: c } = getASTNode()
var {op, lhs, rhs} = getASTNode();
// binds 'op', 'lhs', 'rhs' in scope

// used as param positions
function g({ name: x}) {
    console.log(x);
}
g( { name: 5 } )


// var [a = 1] = [];
// a === 1;