// Experession bodies

evans = [2, 4, 6, 8, 10, 12]
var odds = evans.map(v => v + 1);
var nums = evans.map((v, i) => v + i);
var pairs = evans.map(v => ({even: v, odd: v+1}))

console.log("Odd Numbers: "+odds);
console.log("Numbers: "+nums);
console.log("Pairs: "+pairs);


// statement bodies
fives = [];
nums.forEach( v => {
    if(v%5 === 0)
        fives.push(v);
});
console.log("Numbers : "+ nums);
console.log("fives : "+ fives);


// Lexical this

var bob = { 
    _name: "Bob",
    _friends: [],
    printFriends() {
        this._friends.forEach( f => 
            console.log(this._name + " knows " + f)
        );
    }
}

function Person() { // CTOR function
    this.age = 0;

    //Arrow fn, it doesn't create new context - it uses enclosing class i.e.Person class.
    setInterval( () => {
        this.age++;
        console.log(this.age);
    }, 1000);
}