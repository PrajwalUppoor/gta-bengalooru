@echo off
title Benglooru - Starting Game...
cd /d "%~dp0"

echo ===================================================
echo             Namma Benglooru Game Launcher
echo ===================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo Starting Benglooru with Node.js...
    start http://localhost:3000/
    node server.mjs
    goto :eof
)

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo Starting Benglooru with Python...
    start http://localhost:3000/
    python -m http.server 3000
    goto :eof
)

where py >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo Starting Benglooru with Python...
    start http://localhost:3000/
    py -m http.server 3000
    goto :eof
)

where npx >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo Starting Benglooru with npx serve...
    start http://localhost:3000/
    npx -y serve -p 3000 .
    goto :eof
)

echo [ERROR] Neither Node.js nor Python was found on your system!
echo.
echo To run Benglooru, please install Node.js (recommended):
echo 👉 https://nodejs.org/
echo.
echo Press any key to open the Node.js download page...
pause >nul
start https://nodejs.org/
