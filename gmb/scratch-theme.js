const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app')
];

function processFile(filePath) {
  if (filePath.includes('Hero.tsx') || filePath.includes('globals.css')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Text
  content = content.replace(/\btext-gray-900\b/g, 'text-white');
  content = content.replace(/\btext-gray-800\b/g, 'text-slate-100');
  content = content.replace(/\btext-gray-700\b/g, 'text-slate-200');
  content = content.replace(/\btext-gray-600\b/g, 'text-slate-300');
  content = content.replace(/\btext-gray-500\b/g, 'text-slate-400');
  content = content.replace(/\btext-gray-400\b/g, 'text-slate-500');
  
  // Backgrounds
  content = content.replace(/\bbg-gray-50\/50\b/g, 'bg-slate-900/20');
  content = content.replace(/\bbg-gray-50\b/g, 'bg-slate-900/20');
  
  content = content.replace(/className="([^"]*)"/g, (match, p1) => {
    let newClass = p1;
    if (newClass.includes('py-') || newClass.includes('premium-card') || newClass.includes('section') || newClass.includes('pt-') || newClass.includes('pb-')) {
       newClass = newClass.replace(/\bbg-white\b/g, 'bg-transparent');
    }
    return `className="${newClass}"`;
  });

  // Specific components overrides
  content = content.replace(/bg-white text-primary shadow-sm/g, 'bg-white/10 text-white shadow-sm border border-white/20');
  content = content.replace(/\bbg-white\/90\b/g, 'bg-slate-900/90');
  content = content.replace(/\bbg-white\/80\b/g, 'bg-slate-900/80');

  // Borders
  content = content.replace(/\bborder-gray-100\b/g, 'border-white/10');
  content = content.replace(/\bborder-gray-200\b/g, 'border-white/10');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function traverse(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

dirs.forEach(traverse);
