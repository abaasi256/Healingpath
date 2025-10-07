#!/bin/bash

# HealingPath Auto-Deploy Script
# This script will be triggered by git webhooks

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

# Navigate to app directory
cd $APP_DIR

# Pull latest changes
log "📥 Pulling latest changes from $BRANCH..."
git fetch origin
git reset --hard origin/$BRANCH

# Install dependencies (including dev dependencies for build)
log "📦 Installing all dependencies for build..."
if [ -f "package-lock.json" ]; then
    npm ci --legacy-peer-deps || npm install --legacy-peer-deps
elif [ -f "yarn.lock" ]; then
    npm install --legacy-peer-deps
else
    npm install --legacy-peer-deps
fi

# Build the application
log "🔨 Building the application..."
npm run build

# Copy required files for standalone mode
log "📋 Setting up standalone server..."
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static

# Clean up dev dependencies after build
log "🧹 Cleaning up dev dependencies..."
npm prune --omit=dev

# Create server.js file for standalone mode
log "📝 Creating server.js for standalone mode..."
cat > server.js << 'EOF'
// This file is deprecated - using .next/standalone/server.js instead
console.log('Please use .next/standalone/server.js for standalone mode');
EOF

# Create logs directory
mkdir -p logs

# Restart PM2 process
log "🔄 Stopping existing PM2 processes..."
pm2 stop healingpath || true
pm2 delete healingpath || true

log "🚀 Starting new PM2 process..."
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

log "✅ Deployment completed successfully!"
log "🌐 HealingPath is running on https://healingpath.care"