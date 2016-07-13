#!/bin/sh
rm -rf docs
node_modules/.bin/docco $@ src/*.js
node_modules/.bin/docco $@ src/actions/*.js
