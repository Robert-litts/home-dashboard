#!/bin/bash
ping -c4 192.168.30.1 > /dev/null
now="$(date +'%d/%m/%Y %R')"
if [ $? != 0 ]
then
  echo "no network connection, restarting wlan0: $now" >> /var/log/wlan0.log
  /sbin/ifdown wlan0
  sleep 5
  /sbin/ifup -- force wlan0
else
  echo "wlan0 is up:  $now"  >> /var/log/wlan0.log
fi
