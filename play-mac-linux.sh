#!/usr/bin/env bash
cd "$(dirname "$0")"

echo "==================================================="
echo "            Namma Benglooru Game Launcher"
echo "==================================================="
echo ""

open_browser() {
  local url="http://localhost:3000/"
  if command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$url" &
  elif command -v open >/dev/null 2>&1; then
    open "$url" &
  fi
}

if command -v node >/dev/null 2>&1; then
  echo "Starting Benglooru with Node.js..."
  (sleep 1 && open_browser) &
  node server.mjs
  exit 0
elif command -v python3 >/dev/null 2>&1; then
  echo "Starting Benglooru with Python 3..."
  (sleep 1 && open_browser) &
  python3 -m http.server 3000
  exit 0
elif command -v python >/dev/null 2>&1; then
  echo "Starting Benglooru with Python..."
  (sleep 1 && open_browser) &
  python -m http.server 3000
  exit 0
elif command -v npx >/dev/null 2>&1; then
  echo "Starting Benglooru with npx serve..."
  (sleep 1 && open_browser) &
  npx -y serve -p 3000 .
  exit 0
else
  echo "[ERROR] Neither Node.js nor Python was found!"
  echo "Please install Node.js from https://nodejs.org/ to play."
  exit 1
fi
