//An array is defined with square brackets, and in an array you can have any data you could normally use.
//Arrays can contain mixed types; mixing text, numbers, boolean, objects or other arrays.

const hobbies = ['Climbing','Reading'];

//loop thru array contents
for (let hobby of hobbies) {
    console.log(hobby);
}

//Transform each item in the array on a new copy of the array
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//Original array is not changed
console.log(hobbies);