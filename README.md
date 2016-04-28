# Departure Times [![Build Status](https://travis-ci.org/chhetrisushil/departureTimes.svg?branch=master)](https://travis-ci.org/chhetrisushil/departureTimes) [![codecov](https://codecov.io/gh/chhetrisushil/departureTimes/branch/master/graph/badge.svg)](https://codecov.io/gh/chhetrisushil/departureTimes)

## Overview
Gets departure time of buses based on user location

## Setup
### Production
* git clone https://github.com/chhetrisushil/departureTimes
* `npm install`
* `npm start` - to run the server

### Development
* git clone https://github.com/chhetrisushil/departureTimes
* `npm install`
* `npm run dev` - to run server while watching for file changes

## Running tests
* After running `npm install`
* Run `npm test`
* OR - `npm run test-dev` - to run tests on watch mode

*NOTE*: Needs phantomjs-prebuilt installed globally that can be done by running `npm install phantomjs-prebuilt -g` and also you might have to set `PHANTOMJS_BIN` environment variable that can be done by `export PHANTOMJS_BIN=$(which phantomjs)`
