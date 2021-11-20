import path from 'path';
import os from 'os';
import util from 'util';
import { app, session, ipcMain, Menu, Tray } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import Store from 'electron-store';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

let tray = null;
let mainWindow = null;
let icon_file = null;

switch (os.platform()) {
  case 'linux':
    icon_file = 'icon.png';
    break;
  case 'win32':
    icon_file = 'icon.ico';
    break;
  case 'darwin':
    icon_file = 'icon.icns';
    break;
};

const assetsPath = app.isPackaged ? process.resourcesPath : path.join(__dirname, '..', 'resources');
const icon_path = path.join(assetsPath, icon_file);

(async () => {
  app.setName('greatday-genie');
  await app.whenReady();

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['script-src \'self\' https://fonts.googleapis.com \'unsafe-eval\'']
      }
    })
  })

  mainWindow = createWindow('main', {
    width: 800,
    height: 1000,
    icon: icon_path,
  });
  mainWindow.removeMenu();

  if (isProd) {
    await mainWindow.loadURL('app://./index.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/`);
    mainWindow.webContents.openDevTools();
  }

  const trayListener = (event) => {
    if (!isProd) {
      return;
    }
    event.preventDefault();

    if (tray) {
      return mainWindow.hide();
    }

    console.log('create tray instance, icon_path:', icon_path);
    tray = new Tray(icon_path);
    const template = [
      {
        label: 'Greatday Genie',
        icon: icon_path,
        click: () => {
          mainWindow.show();
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Quit',
        click: () => {
          console.log('quit app');
          mainWindow.removeListener('close', trayListener);
          // tray.destroy();
          app.quit();
        },
      },
    ];
    const contextMenu = Menu.buildFromTemplate(template);
    tray.setToolTip('Greatday Genie');
    tray.setContextMenu(contextMenu);
    mainWindow.hide();
  };

  mainWindow.on('close', trayListener);

})();



app.on('window-all-closed', () => {
  app.quit();
});
