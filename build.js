const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

const sourceDir = path.join(__dirname, 'src');  // If your source files are inside 'src' folder
const distDir = path.join(__dirname, 'dist');

// Check if dist folder exists; if not, create it
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Copy all files from src to dist
ncp(sourceDir, distDir, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Build successful: Files copied to dist');
});
