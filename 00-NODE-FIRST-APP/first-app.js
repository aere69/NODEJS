const fs = require('fs');

console.log('Writing Hello from Node.js to file.');

fs.writeFileSync('hello.txt','Hello from Node.js');
