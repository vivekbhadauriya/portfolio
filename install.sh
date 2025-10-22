#!/bin/bash

echo "🚀 Setting up Vivek Bhadauriya's Portfolio Website"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now run:"
    echo "   npm run dev    - Start development server"
    echo "   npm run build  - Build for production"
    echo "   npm run start  - Start production server"
    echo ""
    echo "🌐 Open http://localhost:3000 to view your portfolio"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
