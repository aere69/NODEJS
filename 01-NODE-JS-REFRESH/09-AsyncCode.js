//--------------------------------------------
// Simple asynchronous operation via setTimer
//--------------------------------------------
setTimeout(() => {
    console.log("First Timer expired.");
},1000);

console.log('Hello');
console.log('Hello again');

//------------------------------------------------
// Basic/Old Asynchronous operations via callback
//------------------------------------------------

const fetchData = callback => {
    setTimeout(() => {
        callback('!Callback function Done!');
    }, 1500);
}

setTimeout(() => {
    console.log('Second Timer expired!');
    fetchData(text => {console.log(text)});
}, 2000);

console.log('Synchronous text 1 : Done 1!');
console.log('Synchronous text 2 : Done 2!');

//-------------------------------------------------
// New way of Asynchronous operations via Promises.
//-------------------------------------------------

const fetchData1 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise Done')
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Third Timer expired');
    fetchData1()
        .then(text => {
            console.log(text);
            //Calls can be nested.
            return fetchData1();
        })
        //Second call included on the definition easier to read.
        .then(text2 => {
            console.log('Second call to fetchData1');
            console.log(text2);
        })
}, 2000);

console.log('Synchronous text 3 : Done 3!');
console.log('Synchronous text 4 : Done 4!');

