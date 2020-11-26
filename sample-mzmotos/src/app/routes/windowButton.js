const { BrowserWindow } = require('electron').remote;
const path = require('path');

function OpenDetails(id) {
    const modalPath = path.join('file://', __dirname, '../html/detail.html');
    let window = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    window.on('close', function() {
        window = null;
    });
    window.loadURL(modalPath);
    window.show();
}

function OpenAdd() {
    const modalPath = path.join('file://', __dirname, '../html/add.html');
    let window = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    window.on('close', function() {
        window = null;
    });
    window.loadURL(modalPath);
    window.webContents.openDevTools();
    window.show();
}