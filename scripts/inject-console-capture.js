const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', '.next');
const SCRIPT_PATH = '/dashboard-console-capture.js';

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(SCRIPT_PATH)) {
    console.log(`Already injected: ${filePath}`);
    return;
  }
  
  const scriptTag = `<script src="${SCRIPT_PATH}"></script>`;
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${scriptTag}</head>`);
  } else if (content.includes('<body>')) {
    content = content.replace('<body>', `<body>${scriptTag}`);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Injected script: ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

if (fs.existsSync(BUILD_DIR)) {
  console.log('Injecting console capture script...');
  walkDir(BUILD_DIR);
  console.log('Done!');
} else {
  console.log('Build directory not found. Run build first.');
}