(function () {
    /**
     * Main Electron process
     */

    'use strict';
    const electron = require('electron');
// Module to control application life.
    const app = electron.app;
// Module to create native browser window.
    const BrowserWindow = electron.BrowserWindow;

    var applicationMenu = require('./browser/application-menu');

    var mainWindow = null;

    app.on('ready', function () {

        global.aureliaRoot = __dirname  + '/src/';

        applicationMenu.setup();

        mainWindow = new BrowserWindow({
            width: 900,
            height: 700,
            "min-width": 400,
            "min-height": 300,
            center: true,
            resizable: true
        });

        mainWindow.loadURL('file://' + __dirname + '/src/index.html');

    });
})();