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

//Get the directory name of the home path
const dirName = path.dirname(homePath);
console.log('Directory Name:', dirName);

//Normalize a path with redundant segments
const normalizedPath = path.normalize('/home//user/../home');
console.log('Normalized Path:', normalizedPath);

//Resolve a relative path to an absolute path
