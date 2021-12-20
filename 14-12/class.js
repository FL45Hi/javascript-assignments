class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Man extends Person {
    constructor(name){
        super(name)
        this.gender = "Male"
    }
}

// var john = new Person("John")

// console.log(john.getName());
    
var John = new Man("John")
console.log(John.name) // John
console.log(John.gender) // Male
    
    

// var person = {
//     name: 'John',
//     printName: function(){
//     console.log(this.name); // John
//     var getName = function() {
//     return this.name // ERROR
//     }

//     var getNameArrowFunction = () => {
//     return this.name
//     }
//     // TypeError: Cannot read property 'name' of undefined
//     console.log(getName())
//     // John
//     console.log(getNameArrowFunction())
//     }
// }
// person.printName()

