#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Vivek Bhadauriya Portfolio Development Server');
console.log('======================================================');

// Check if node_modules exists
if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully!');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
}

// Start development server
console.log('🌐 Starting development server...');
console.log('📍 Open http://localhost:3000 in your browser');
console.log('🔄 Hot reload is enabled - changes will be reflected automatically');
console.log('⏹️  Press Ctrl+C to stop the server');
console.log('');

try {
  execSync('npm run dev', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Failed to start development server:', error.message);
  process.exit(1);
}
