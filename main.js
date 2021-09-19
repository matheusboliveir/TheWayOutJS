const { app, BrowserWindow, screen } = require('electron');

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

let win;

app.on('ready', () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    win = new BrowserWindow({
        width,
        height,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    //win.removeMenu();
    win.loadFile('app/index.html');
});

app.on('window-all-closed', () => {
    return app.quit();
  });