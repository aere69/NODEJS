const hobbies = ['Climbing','Reading'];

//Make a copy of array
const hobbiesCopy = hobbies.slice();
console.log(hobbiesCopy);

//Nested Array
//Hobbies array is the first element of nestedHobbies array.
const nestedHobbies = [hobbies]
console.log(nestedHobbies);

//Spread operator (...) - pull elements or properties out of arrays or objects.
//They take the array or object after the operator and pull out all the elements or properties.
//So all the elements of an array or all the properties of an object and put it to whatever is around that spread Operator.
//In this case, we got square brackets around the spread operator and therefore all the elements which
//are pulled out of the existing array are added to the new array.
const spreadHobbies = [...hobbies];
console.log(spreadHobbies);

const person = {
    name: 'Paul',
    age: 25,
    greet3() {
        console.log('Hello my name is ' + this.name);
    }
};

//Copy person onto new object.
const personCopy = {...person};
console.log(personCopy);

//Rest operator (...) - Merge multiple arguments into an array and you use it in the argument list of a function.
//works inside a function argument. Takes all the arguments when the function is called and turns them to an array.
const toArray = (...args) => {
    return args;
};
console.log(toArray(1,2,3));
console.log(toArray(1,2,3,4,5,6));
