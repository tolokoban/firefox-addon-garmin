#!/usr/bin/env bash

# Tell the shell to stop if any command fails.
set -e

DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$DIR/dist"

# Clean previous browser-specific builds and stale root files
rm -rf "$DIST/firefox" "$DIST/chrome"
find "$DIST" -maxdepth 1 -type f -delete

# Copy common build to both targets
cp -r "$DIST/common" "$DIST/firefox"
cp -r "$DIST/common" "$DIST/chrome"

# Add browser-specific manifests
cp "$DIR/src/manifest.firefox.json" "$DIST/firefox/manifest.json"
cp "$DIR/src/manifest.chrome.json" "$DIST/chrome/manifest.json"
