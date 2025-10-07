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

# Install dependencies
log "📦 Installing dependencies..."
if [ -f "package-lock.json" ]; then
    npm ci --omit=dev --legacy-peer-deps || npm install --omit=dev --legacy-peer-deps
elif [ -f "yarn.lock" ]; then
    npm install --omit=dev --legacy-peer-deps
else
    npm install --omit=dev --legacy-peer-deps
fi

# Build the application
log "🔨 Building the application..."
npm run build

# Create server.js file for standalone mode
log "📝 Creating server.js for standalone mode..."
cat > server.js << 'EOF'
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
EOF

# Create logs directory
mkdir -p logs

# Restart PM2 process
log "🔄 Restarting PM2 process..."
pm2 restart ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

log "✅ Deployment completed successfully!"
log "🌐 HealingPath is running on https://healingpath.care"