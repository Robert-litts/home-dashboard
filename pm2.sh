#!/bin/bash

pm2 startup

cd /home/$USER
#copy
curl -s https://raw.githubusercontent.com/Robert-litts/home-dashboard/main/mm.sh > mm.sh
chmod +x mm.sh

cd/home/$USER
pm2 start mm.sh
pm2 save
