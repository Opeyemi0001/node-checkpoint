const http = require('http');
// console.log(http);



// (1)
// Create a file named hello-world.js
// Write a program to print "HELLO WORLD" to the console
console.log('HELLO WORLD');




// (2)
// create a server
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000

// server configuration
const PORT = 3000;

// Request handler function
function handleRequest (req, res) {
  // send the response
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!!!!</h1>\n');
}

// Create the Server
const server = http.createServer(handleRequest);




// (3)
// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from welcome.txt
const fs = require('fs');

// Create the file
fs.writeFile('welcome.txt', 'Hello Node/n',(err) => {
  if (err) throw err;
  console.log('File has been saved');


  // Read the file
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
})


// Start Server
server.listen(PORT, () => {
  console.log(`😍💕Server running on http://localhost:${PORT}`);
});