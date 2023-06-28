const person = {
    name: 'Paul',
    age: 25,
    //--- ERROR -- 
    //This syntax will not print name (undefined). 
    //In this syntax 'this' refers to the global scope, not to the object only
    greet: () => {
        console.log('Hello my name is ' + this.name);
    },
    //--- FIXES ---
    //This syntax will print name. 
    //In this syntax we are refering to the object in the global scope.
    greet1: () => {
        console.log('Hello my name is ' + person.name);
    },
    //This syntax will print name. 
    //With the traditional funtion definiton, 'this' refers to the object in which the function is a member.
    greet2: function() {
        console.log('Hello my name is ' + this.name);
    },
    //This syntax will print name. 
    //In this syntax, 'this' refers to the object in which the function is a member.
    greet3() {
        console.log('Hello my name is ' + this.name);
    }
};

//Print the contents of the object
console.log(person);

//Print the result of the different versions function greet
person.greet();
person.greet1();
person.greet2();
person.greet3();
