const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

const sourceDir = path.join(__dirname, '');
const distDir = path.join(__dirname, 'dist');

// Check if dist folder exists; if not, create it
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });  // Clear out any previous dist folder to avoid the nesting issue
}
fs.mkdirSync(distDir);

// Copy all files from src to dist
ncp(sourceDir, distDir, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Build successful: Files copied to dist');
});
