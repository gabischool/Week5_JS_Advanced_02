// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"
function Person(qaate){
    this.name=qaate.name;
    this.age=qaate.age;
    this.hobby=qaate.hobby;
   
}
Person.prototype.speak=function(){
        return `hello my name is ${this.name} and iam ${this.age} years old i love ${this.hobby}`;
    }
    const dad =new Person({
        name:'hussein',
        age:63,
        hobby:'bbc',
    
    })
    const mum =new Person({
        name:'kheyrto',
        age:57,
        hobby:'bbc',
    
    })
    const bro =new Person({
        name:'mohamed',
        age:33,
        hobby:'footbal',
    
    })
    const sis =new Person({
        name:'aniso',
        age:14,
        hobby:'drama',
    
    })
    
    
    
    
    
const me =new Person({
    name:'abdihamid',
    age:21,
    hobby:'football',

})
console.log(me.speak())
console.log(dad.speak())
console.log(mum.speak())
console.log(bro.speak())
console.log(sis.speak())




// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results