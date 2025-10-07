#!/bin/bash
# Manual deployment script for testing
# Run this on your VPS to fix the styling issues

echo "🔧 Manual HealingPath Deployment Fix"
echo "This will rebuild and properly copy all assets"

cd /var/www/healingpath || { echo "❌ Cannot find healingpath directory"; exit 1; }

# Stop the current process
echo "⏸️ Stopping current application..."
pm2 stop healingpath || true

# Clean and rebuild
echo "🧹 Cleaning previous build..."
rm -rf .next

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the application
echo "🔨 Building application..."
NODE_ENV=production npm run build

# Verify standalone build exists
if [ ! -d ".next/standalone" ]; then
    echo "❌ Standalone build failed!"
    exit 1
fi

echo "📋 Copying static assets..."

# Create directories
mkdir -p .next/standalone/public
mkdir -p .next/standalone/.next/static

# Copy public folder (images, favicon, etc.)
if [ -d "public" ]; then
    echo "📁 Copying public assets..."
    cp -r public/* .next/standalone/public/
fi

# Copy static assets (CSS, JS, etc.)
if [ -d ".next/static" ]; then
    echo "🎨 Copying static assets (CSS, JS)..."
    cp -r .next/static/* .next/standalone/.next/static/
fi

# Copy package.json
cp package.json .next/standalone/

echo "🔄 Restarting PM2..."
pm2 delete healingpath || true
pm2 start ecosystem.config.js --env production
pm2 save

echo "✅ Manual deployment complete!"
echo "🌐 Check your website: https://healingpath.care"
echo "📊 Check PM2 status: pm2 status"
echo "📝 Check logs: pm2 logs healingpath"