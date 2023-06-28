const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>NODEJS Server App - Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end() //Send the response back. Return form the function stop here.
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302; /* FOUND */
                res.setHeader('Location', '/'); /* redirect to home */
                return res.end() //Send the response back. Return form the function stop here.
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Node Server App</title></head>');
    res.write('<body><h1>Welcome to Node.js Server App</h1></body>');
    res.write('</html>');
    res.end() //Send the response back
};

//module.exports = requestHandler;

//module.exports = {
//    handler : requestHandler,
//    varText : 'Some hardcoded text'
//}

exports = {
    handler : requestHandler,
    varText : 'Some hardcoded text'
}
