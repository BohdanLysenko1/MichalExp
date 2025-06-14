#!/bin/bash

# MichalExp Cache Cleanup Script
# Use this whenever styling issues occur

echo "🧹 Cleaning MichalExp build cache..."

# Stop any running dev servers
echo "📱 Stopping dev servers..."
pkill -f "astro dev" 2>/dev/null || true
pkill -f "vite" 2>/dev/null || true

# Remove all cache directories
echo "🗑️  Removing cache directories..."
rm -rf .astro
rm -rf dist
rm -rf node_modules/.cache
rm -rf node_modules/.vite
rm -rf .next
rm -rf .cache

# Reinstall dependencies (optional, add --force if needed)
echo "📦 Reinstalling dependencies..."
npm install

echo "✅ Cache cleanup complete!"
echo "🚀 Run 'npm run dev' to start fresh"
