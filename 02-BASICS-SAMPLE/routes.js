const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>NODEJS Basic Server App - HOME</title></head>');
        res.write('<body><h1>Add new user</h1><form action="/create-user" method="POST"><input type="text" name="user" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users')  {
        res.write('<html>');
        res.write('<head><title>NODEJS Basic Server App - users</title></head>');
        res.write('<body><h1>User list</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li><li>User 5</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const newUser = parsedBody.split('=')[1];
            console.log(newUser);
            res.statusCode = 302; /* FOUND */
            res.setHeader('Location', '/users'); /* redirect to users */
            return res.end() //Send the response back. Return form the function stop here.
        });
    }

    // ---- Catch all ----
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>NODEJS Basic Server App</title></head>');
    res.write('<body><h1>Basic Server App</h1></body>');
    res.write('</html>');
    res.end() //Send the response back
};

module.exports = {
    handler : requestHandler,
};