const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
                <style>
                    body { font-family: Arial; text-align: center; padding: 50px; }
                    h1 { color: blue; }
                </style>
            </head>
            <body>
                <h1>Welcome to Home Page</h1>
                <p>This is the home page of my Node.js server</p>
                <a href="/about">Go to About</a> | 
                <a href="/contact">Go to Contact</a>
            </body>
            </html>
        `);
        res.end();
    }
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Page</title>
                <style>
                    body { font-family: Arial; text-align: center; padding: 50px; }
                    h1 { color: green; }
                </style>
            </head>
            <body>
                <h1>About Us</h1>
                <p>I am Anudeep Mekala, learning Node.js!</p>
                <p>Roll Number: 160124737118</p>
                <a href="/">Go to Home</a> | 
                <a href="/contact">Go to Contact</a>
            </body>
            </html>
        `);
        res.end();
    }
    else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Contact Page</title>
                <style>
                    body { font-family: Arial; text-align: center; padding: 50px; }
                    h1 { color: orange; }
                </style>
            </head>
            <body>
                <h1>Contact Us</h1>
                <p>Email: anudeep@example.com</p>
                <p>Phone: +91-9876543210</p>
                <a href="/">Go to Home</a> | 
                <a href="/about">Go to About</a>
            </body>
            </html>
        `);
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 - Page Not Found</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
    console.log('Student: Anudeep Mekala (160124737118)');
});