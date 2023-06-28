//Objects and arrays are reference types.
//Reference types only store an address pointing at the place in memory where that array is stored.
//When we do edit in quotation marks a constant value.
//We're not really editing the thing that is stored in a constant.
//We're only editing the thing that constant thing is pointing at.

//Since Array is a reference type. Eventhough it is stored in a constant hobbies, It can still be edited without violating the restriction that constants must not change.
const hobbies = ['Climbing','Reading'];

//Push adds a new element to the array.
//The array address has not changed by us adding a new element.
//The thing it's pointing at has changed.
hobbies.push('Driving');

console.log(hobbies);