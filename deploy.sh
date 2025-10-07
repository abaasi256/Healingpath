#!/bin/bash

# HealingPath Auto-Deploy Script with Proper Static Asset Handling
# This script ensures styling and assets are preserved during deployment

set -e

echo "🚀 Starting HealingPath deployment..."

# Configuration
APP_NAME="healingpath"
APP_DIR="/var/www/healingpath"
REPO_URL="https://github.com/abaasi256/Healingpath.git"
BRANCH="main"

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to handle errors
error_exit() {
    log "❌ Error: $1"
    exit 1
}

# Navigate to app directory
cd $APP_DIR || error_exit "Failed to change to app directory"

# Stop PM2 process before deployment
log "⏸️ Stopping current application..."
pm2 stop healingpath || true

# Pull latest changes
log "📥 Pulling latest changes from $BRANCH..."
git fetch origin || error_exit "Failed to fetch from git"
git reset --hard origin/$BRANCH || error_exit "Failed to reset to latest commit"

# Install dependencies (including dev dependencies for build)
log "📦 Installing all dependencies for build..."
if [ -f "package-lock.json" ]; then
    npm ci --legacy-peer-deps || npm install --legacy-peer-deps || error_exit "Failed to install dependencies"
elif [ -f "yarn.lock" ]; then
    yarn install || error_exit "Failed to install dependencies with yarn"
else
    npm install --legacy-peer-deps || error_exit "Failed to install dependencies"
fi

# Clean previous build if exists
log "🧹 Cleaning previous build..."
rm -rf .next || true

# Build the application
log "🔨 Building the application..."
NODE_ENV=production npm run build || error_exit "Build failed"

# Verify build was successful
if [ ! -d ".next/standalone" ]; then
    error_exit "Standalone build directory not found. Build may have failed."
fi

# Copy required files for standalone mode
log "📋 Setting up standalone server with static assets..."

# Ensure directories exist
mkdir -p .next/standalone/public
mkdir -p .next/standalone/.next/static

# Copy public folder (images, favicon, etc.)
if [ -d "public" ]; then
    log "📁 Copying public assets..."
    cp -r public/* .next/standalone/public/ || error_exit "Failed to copy public assets"
fi

# Copy static assets (CSS, JS, etc.)
if [ -d ".next/static" ]; then
    log "🎨 Copying static assets (CSS, JS)..."
    cp -r .next/static/* .next/standalone/.next/static/ || error_exit "Failed to copy static assets"
fi

# Copy package.json for dependencies
cp package.json .next/standalone/ || error_exit "Failed to copy package.json"

# Create logs directory
mkdir -p logs

# Verify all required files are in place
log "🔍 Verifying deployment files..."
if [ ! -f ".next/standalone/server.js" ]; then
    error_exit "Standalone server.js not found"
fi

if [ ! -d ".next/standalone/public" ]; then
    error_exit "Public directory not copied properly"
fi

if [ ! -d ".next/standalone/.next/static" ]; then
    error_exit "Static assets not copied properly"
fi

# Clean up dev dependencies after build (optional, saves space)
log "🧹 Cleaning up dev dependencies..."
npm prune --omit=dev || true

# Restart PM2 process
log "🔄 Managing PM2 processes..."
pm2 delete healingpath || true

log "🚀 Starting new PM2 process..."
pm2 start ecosystem.config.js --env production || error_exit "Failed to start PM2 process"

# Save PM2 configuration
pm2 save

# Verify the process is running
log "✅ Verifying deployment..."
if pm2 describe healingpath | grep -q "online"; then
    log "✅ Deployment completed successfully!"
    log "🌐 HealingPath is running on https://healingpath.care"
    log "📊 Check PM2 status: pm2 status"
    log "📝 Check logs: pm2 logs healingpath"
else
    error_exit "PM2 process failed to start properly"
fi