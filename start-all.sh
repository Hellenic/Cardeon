#!/bin/sh
cd imagebank/ && npm install && npm start &
cd api/ && npm install && npm start &
# cd admin/ && npm start &
cd game/ && npm install && npm run dist && http-server dist/ &
