const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

const sourceDir = __dirname;
const distDir = path.join(__dirname, 'dist');

// Remove existing dist folder to avoid nesting
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// Filter out dist directory itself during copy
ncp.limit = 16;
ncp(sourceDir, distDir, {
  filter: (file) => !file.includes(path.join('dist')) && !file.includes('node_modules')
}, (err) => {
  if (err) {
    return console.error('Copy failed:', err);
  }
  console.log('Build successful: Files copied to dist');
});
