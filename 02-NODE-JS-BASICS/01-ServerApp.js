const http = require('http');
const fs = require('fs');

/**** Option 1 ****/

function rqListener(req, res){
    console.log(req);
    process.exit() /* Hard code kill process */
};
const server1 = http.createServer(rqListener);

/**** Option 2 ****/

const server2 = http.createServer(function(req,res){
    console.log(req);
});

/**** Option 3 ****/

const server3 = http.createServer((req,res) => {
    //console.log(req); /* Log everything */
    console.log(req.url, req.method, req.headers);

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
});

/**** Stop execution by pressing CTRL + C on terminal ****/
/* Default port : 80 */
server3.listen(3000);