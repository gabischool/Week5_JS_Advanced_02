/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several classes with their correct inheritance hierarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properties and methods that are defined in their block comments below:
*/

// ++++ Example Class +++++

class Employee{
  constructor(attributes) {
    this.name = attributes.name;
  }

  task() {
    return `${this.name} is working on a task.`;
  }
}

const fred = new Employee({
    name: 'Fred',
});

console.log("This is example result: ", fred.task());

// ++++ YOUR ASSIGNMENT STARTS HERE +++++

  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // A method that returns: `${this.name} was removed from the game.`
*/
class GameObject{
  constructor(createdAt,name,dimensions){
    this.createdAt=createdAt;
    this.name=name;
    this.dimensions=dimensions;

    

  }
  destroy(){
    return `${this.name} was removed from the game`;
  }
  
}



/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // A method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's method
*/
class CharacterStats extends GameObject {
  constructor(destroy,healthPoints){
    super(destroy);
    this.healthpoints=healthpoints;

    
  }
  takeDamage(){
    
    return `${this.name} took damage`;
  
  }
}






/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // A method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 class Humanoid extends CharacterStats {
  constructor ( takeDamage,destroy ,team,weapons,lanuage){
    
    super(takeDamage);
    super(destroy)
    this.team=team;
    this.weapons=weapons;
    this.lanuage=lanuage;
    
  }
    greet(){
    
   
    return `${this.name} offers a greating ${this.lanuage}`
  }
 }



/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero class that inherit from the Humanoid class.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!