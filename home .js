//Let's practice with paths in Node.js!
const path = require('path');

//Join the current directory with 'home' to create a path
const homePath = path.join(__dirname, 'home');
console.log('Home Path:', homePath);

//Get the base name of the home path
const baseName = path.basename(homePath);
console.log('Base Name:', baseName);

//Get the extension (likely empty for 'home')
console.log('Extension:', path.extname(homePath));