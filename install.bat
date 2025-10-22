@echo off
echo 🚀 Setting up Vivek Bhadauriya's Portfolio Website
echo ==================================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
    echo.
    echo 🎉 Setup complete! You can now run:
    echo    npm run dev    - Start development server
    echo    npm run build  - Build for production
    echo    npm run start  - Start production server
    echo.
    echo 🌐 Open http://localhost:3000 to view your portfolio
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

pause
