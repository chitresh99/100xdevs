// Constructor: A special method in a class.
// Purpose: Initializes the properties of an object.
// Automatically Called: The constructor is called automatically when a new object is created.

class animal {
    constructor(name,colour,vocab,sound){
        this.name = name;
        this.colour = colour;
        this.vocab = vocab;
        this.sound = sound;
    }

    static mytype(){
        console.log("animal");
    }

    speak(){
        console.log(this.sound);
    }
}
let dog = new animal("coco","black","barks","bhowbhow"); //create an object
dog.speak(); //call function on the object

animal.mytype();

//to access a particular property for an object we have to create a specific function

// a class will have attributes and functions

// new creates new instances of objects based on a constructor function or class.

// this refers to the current instance of an object being created or manipulated, allowing 
// access to instance variables and methods.

// this helps you access and work with the data (properties) and behavior (methods) of the current object

// functions can be called on the object of the class 
// cannot be called directly on the class
