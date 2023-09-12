// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results





function Person(attr){

    this.name  = attr.name,
    this.age  = attr.age,
    this.hoppy = attr.hoppy


}

Person.prototype.speak = function(){
    return ` magcyku waa ${this.name} waxana ka hilaa ${this.hoppy}`

}


const Me = new Person({
    name : 'xaan',
    age : 20,
    hoppy : 'fotball'
})

console.log(Me.speak())




const Prother = new Person({
    name : 'maxmed',
    age : 10,
    hoppy : 'basketball'
})

const Sister = new Person({
    name : 'asmo',
    age : 17,
    hoppy : 'watching films'
})

console.log(Sister.speak())


