#!/bin/bash
npm run build & while [ ! -f /usr/app/dist/main.js ]
do
  echo 'initial build not finish yet'
  sleep 1
done
npm run start:dev
