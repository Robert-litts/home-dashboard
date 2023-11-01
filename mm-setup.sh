#!/bin/bash

#user=$(whoami) #Get the current user

echo "Disabling Screensaver"
#Prevent screen from turning off
export DISPLAY=:0
xset -dpms #disable Display Power Mgmnt Signaling
xset s off #Disable screensaver from starting
#xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/dpms-enabled -s false #Disable power management settings for XFCE

echo "Installing MM"
cd /home/$user
git clone https://github.com/MichMich/MagicMirror && cd "$(basename "$_" .git)"
npm run install-mm

##Install MM Modules

echo "Installing Custom MM Modules"
##MonthlyCalendar
cd /home/$user/MagicMirror/modules
git clone https://github.com/kolbyjack/MMM-MonthlyCalendar.git && cd "$(basename "$_" .git)"
npm install

##Wallpaper
cd /home/$user/MagicMirror/modules
git clone https://github.com/kolbyjack/MMM-Wallpaper.git && cd "$(basename "$_" .git)"
npm install

##StockTicker
cd /home/$user/MagicMirror/modules
git clone https://github.com/jalibu/MMM-Jast.git && cd "$(basename "$_" .git)"
npm install --only=production

##Dark Sky Forecast
cd /home/$user/MagicMirror/modules
git clone https://github.com/jclarke0000/MMM-DarkSkyForecast.git && cd "$(basename "$_" .git)"
git fetch origin pull/38/head:pirate
git checkout pirate
npm install

cd /home/$user/MagicMirror/modules
git clone https://github.com/Jopyth/MMM-Remote-Control.git && cd "$(basename "$_" .git)"
npm install

echo "Updating MM Config"
cd /home/$user/MagicMirror/config
curl -s https://raw.githubusercontent.com/Robert-litts/home-dashboard/main/config.js -o config.js

#cd /home/$user/MagicMirror/css
#curl -s https://raw.githubusercontent.com/Robert-litts/home-dashboard/main/home_dash_custom.css -o custom.css

echo "Enabling MM Autostart"
cd/home/$user
curl https://raw.githubusercontent.com/Robert-litts/home-dashboard/main/pm2.sh | bash
