const { app,BrowserWindow,screen } = require('electron');

require('electron-reload')(__dirname,{
    electron: require(`${__dirname}/node_modules/electron`)
});

let win;

app.on('ready', () => {
   const {width, height} = screen.getPrimaryDisplay().workAreaSize;
   win = new BrowserWindow({width, height});
   win.removeMenu();
   win.loadFile('app/html/index.html');
});