const name = 'Peter';
let age = '25';
const hasCar = false;

age = '33';

const userDetails = (userName, userAge, userHasCar) => {
    return ('Name is ' + userName + ', Age is ' + userAge + ' and the user Has a Car: ' + userHasCar);
}
console.log(userDetails(name,age,hasCar));

const add = (a,b) => {
    return a+b;
}
console.log(add(1,2));

const adds = (a,b) => a+b;
console.log(adds(1,2));

const addOne = (a) => a+1;
console.log(addOne(2));

const addsOne = a => a+1;
console.log(addsOne(2));

//Function with no parameters requires the parenthesis on the definiton and method call.
const addRandom = () => 1+2;
console.log(addRandom());