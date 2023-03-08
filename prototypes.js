// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

function Person(attributes){
    this.Age = attributes.Age;
    this.Name = attributes.Name;
    this.Hubby =attributes.Hubby;
    };
    
    Person.prototype.speak = function() {
    
        return `Hello, My name is ${this.Name} and I'm ${this.Age} age  years old. i love ${this.Hubby} Hobby`;
    };

     const Me = new Person({
      Name: "Iqra",
      Age:  20,
      Hubby: "reading",
    
     })
     console.log(Me.speak());

// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results