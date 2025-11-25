const fs = require('fs');
const path = require('path');

function fixNextPaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixNextPaths(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/\.next\//g, '_next/');
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

if (fs.existsSync('out')) {
  fixNextPaths('out');
  console.log('Fixed .next paths to _next');
}