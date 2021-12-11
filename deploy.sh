#!/bin/bash

git reset --hard
git pull origin master
npm i

pm2 start process.config.js --env production
