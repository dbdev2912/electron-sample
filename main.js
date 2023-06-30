const { app, BrowserWindow } = require("electron");
const path = require("path");
const REACT_SERVER_URL = 'http://localhost:3000'

let win;

const createWindow = () => {
    win = new BrowserWindow({ 
        width: 1280, 
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true, // like here
            webSecurity: false
        } 
    })
    // win.loadFile('index.html') 
    // win.loadURL(`file://${ __dirname }/build/index.html`) // only in build situation
    win.loadURL(REACT_SERVER_URL)
    win.webContents.openDevTools();

    win.on("closed", () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if( process.platform !== 'darwin' ){
        app.quit()
    }
})

app.on( 'activate', () => {
    if( win === null ){
        createWindow()
    }
})