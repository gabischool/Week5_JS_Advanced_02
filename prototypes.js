// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

function Person(attr){
    this.name = attr.name;
    this.age = attr.age;
    this.hobby = attr.hobby;
  
}

Person.prototype.speak = function(){
    return `hello, my name is ${this.name} and iam ${this.age} years old. i love ${this.hobby} `
  }

 
const Me = new Person ("Ayan",'20', 'foodball' )

console.log(Me.speak())



// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results