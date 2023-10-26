#!/bin/bash

pm2 startup

cd /home/$USER
#copy
curl -s https://gitea.litts.me/robbie/magicmirror/raw/branch/master/orangepi/mm.sh > mm.sh
chmod +x mm.sh

cd/home/$USER
pm2 start mm.sh
pm2 save
