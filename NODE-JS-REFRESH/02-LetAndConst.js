// const : value is not going to change - constant. Use the definition to avoid errors if attempt to change the value in code.
// let : create a variable. Value may change.

const name = 'Peter';
let age = '25';
const hasCar = false;

// name = 'Jason'; <-- Will throw an error. Name is defined as a constant.
age = '33';

function userDetails(userName, userAge, userHasCar) {
    return ('Name is ' + userName + ', Age is ' + userAge + ' and the user Has a Car: ' + userHasCar);
}

console.log(userDetails(name,age,hasCar));