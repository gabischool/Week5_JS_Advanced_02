// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

function Person(attributes){
this.age = attributes.age;
this.name = attributes.name;
this.hubby =attributes.hubby;
// this.speak = functon(){
//     return `"Hello, My name is + name + and I'm + age + years old. I love + Hobby"`;
};

Person.prototype.speak = function() {

    return `Hello, My name is ${this.name} and I'm ${this.age} age  years old. i love ${this.hubby} Hobby`;
};




 const me = new Person({
  name: "mohamed",
  age:  38,
  hubby: "coding",

 })


 console.log(me.speak());

// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results