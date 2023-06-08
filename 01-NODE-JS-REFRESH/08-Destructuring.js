const person = {
    name: 'Paul',
    age: 25,
    greet3() {
        console.log('Hello my name is ' + this.name);
    }
};

const printName = (personData) => {
    console.log(personData.name);
}
printName(person);

// Take a specific property from an object
const printName1 = ({name}) => {
    console.log(name);
}
printName1(person);

const {name,age} = person;
console.log(name,age);

//Assign the values on array position to variables.
const hobbies = ['Climbing','Reading'];
const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1,hobbie2);