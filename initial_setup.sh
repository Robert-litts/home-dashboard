#!/bin/bash

export user=$SUDO_USER ##get the current user
echo "Current User is:" $user 

if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

if [ -z "$user" ]
  then echo "set user variable to be your username"
  exit
fi

#Update system and upgrade packages
apt update && apt upgrade -y

#Packages for XFCE
pkgs=(xfce4 xfce4-goodies xfce4-terminal light-locker desktop-base xorg xserver-xorg-input-all xserver-xorg-video-all lightdm network-manager-gnome libnss3-dev git ifupdown)
#packages for LXQT
#pkgs=(lxqt desktop-base xorg xserver-xorg-input-all xserver-xorg-video-all lightdm network-manager-gnome libnss3-dev) 
sudo apt -y --ignore-missing --no-install-recommends install "${pkgs[@]}"

echo "Updating LightDM Config"
sudo mv /etc/lightdm/lightdm.conf /etc/lightdm/lightdm.conf.old
sudo wget https://raw.githubusercontent.com/Robert-litts/home-dashboard/main/lightdm.conf -P /etc/lightdm

#Install tailscale
#curl -fsSL https://tailscale.com/install.sh | sh


#Install Magic Mirror
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt-get install nodejs -y
#apt install -y npm
sudo npm install -g pm2

echo "Setting Up Magic Mirror"
su -c "curl https://raw.githubusercontent.com/Robert-litts/home-dashboard/main/mm-setup.sh | bash" $user
#su - $user -c 'https://gitea.litts.me/robbie/magicmirror/raw/branch/master/orangepi/mm-setup.sh | set -s pipefail; bash'



echo "Setup Complete, Rebooting in 5 Seconds!"
for i in {5..1}; do
    echo $i
done

reboot
