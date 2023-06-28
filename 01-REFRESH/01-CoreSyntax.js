var name = 'Peter';
var age = '25';
var hasCar = false;

function userDetails(userName, userAge, userHasCar) {
    return ('Name is ' + userName + ', Age is ' + userAge + ' and the user Has a Car: ' + userHasCar);
}

console.log(userDetails(name,age,hasCar));