# Electron ES6 Aurelia MongoDB

Thick client demo app showing Electron, ES6, Aurelia, and MongoDB working together.

This application can be run and built on Windows & OS X.  I've not tested it yet on Linux but it will build and run in Linux as well.

## Electron Links

Electron Home: http://electron.atom.io

Outstanding list of Electron links: https://github.com/sindresorhus/awesome-electron

Outstanding Electron blog post: http://www.toptal.com/javascript/electron-cross-platform-desktop-apps-easy

Full documentation on the electron-packager see: https://github.com/maxogden/electron-packager

NOTE:  To build Windows on Mac, follow the directions at the bottom of the electron-packager webpage.  I was unable to get "wine" installed correctly on my Mac at the time this was created.  I'll update when I'm able to build Windows on my Mac.

Outstanding Electron Video:  https://www.youtube.com/watch?v=OHOPSvTltPI

## ES6 Links

ECMAScript 6 - New Features: Overview & Comparison: http://es6-features.org

Dave Atchley on ES6 Promises:  http://www.datchley.name/es6-promises/

## Aurelia

Home Page:  http://aurelia.io/

## MongoDB

Home Page: https://mongodb.github.io/node-mongodb-native/index.html


## Prerequisites

These prerequisites must be installed as described below.

- Install or have access to MongoDB.  You can use either an existing local MongoDB server or a remote MongoDB server.

	If you need one, install it and either start MongoDB or configure it to run automatically.  Please see the MongoDB documentation for your operating system. Please perform a test connection to your MongoDB server before proceeding.

	This application uses the default MongoDB connection string to connect to the test database that is installed automatically.
	
	Default connection string:	`mongodb://localhost:27017/test`
	
	If you are using a remote MongoDB server or you changed the default port on local install, you'll need to modify the above connection string.  The connection string is in the `/src/home/mongoService.js` file.


- Install node.js

- Install the Electron Prebuilt globally:

	`npm install -g electron-prebuilt`

- Install the Electron Packager globally:

	`npm install -g electron-packager`


## Download and Run 

- Download the zip from this repo.
- Install root folder node modules.
  
	`cd / { path to app }`

	`npm install`

- Install root folder jspm modules
	
	`cd / { path to app }`

	`jspm install`

- Install src folder node modules

	`cd src`
	
	`npm install`
	
	`cd ..`


## Run the app

- From the app root folder

	`cd / { path to app }`
	
	`electron .`

	or

	`npm start`



## Build the distribution files on Mac

`cd / { path to app }`

`electron-packager . 'Demo Electron AngularJS' --platform=darwin --arch=x64 --version=0.35.1 --overwrite --out ./build/mac`

or

`npm run-script build-mac`


## Build the distribution files on Windows 

> **NOTE: if you are building Windows on Mac, you must follow instructions in the above electron-packager website.
> **

`cd / { path to app }`

`electron-packager . 'Demo Electron AngularJS' --platform=win32 --arch=ia32 --version=0.35.1 --overwrite --out ./build/win`

or

`npm run-script build-win`


## Why is there a package.json in the /src folder?

This is a good question. 

I tried for 3 weeks to get mongodb to work when installed using jspm.  I could get it to install, but when I tried to import it, the System.js module loader would keep trying to bring in Kerberos, which was not built nor actually required.

So...

I brought in mongoldb in use npm in the source folder.  This made mongoldb available using require instead of import.