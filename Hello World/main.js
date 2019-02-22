'user strict'

const {app, BrowserWindow} = require('electron');
let   mainWindow           = null;                 //应用窗口的应用

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('ready', ()=>{
    mainWindow = new BrowserWindow();
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });
});