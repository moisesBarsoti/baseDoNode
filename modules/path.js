const path = require('path');

// Basename
console.log(path.basename(__filename));

// current directory
console.log(path.dirname(__filename));

// Extensions files
console.log(path.extname(__filename));

// Create object path
console.log(path.parse(__filename));

// join file path
console.log(path.join(__dirname, 'teste'));