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

// function debug_emitter(emitter, name) {
//   var orig_emit = emitter.emit;
//   emitter.emit = function() {
//       var emitArgs = arguments;
//       console.log("emitter " + name + " " + util.inspect(emitArgs));
//       orig_emit.apply(emitter, arguments);
//   }
// }

(async () => {
  app.setName('greatday-clock-in');
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
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }

  const trayListener = (event) => {
    event.preventDefault();

    if (tray) {
      console.log('call win hide');
      return mainWindow.hide();
    }

    console.log('create tray instance, icon_path:', icon_path);
    tray = new Tray(icon_path);
    const template = [
      {
        label: 'Greatday',
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
    console.log('buildFromTemplate');
    const contextMenu = Menu.buildFromTemplate(template);
    tray.setToolTip('Greatday');
    tray.setContextMenu(contextMenu);
    mainWindow.hide();
  };

  mainWindow.on('hide', () => { 
    console.log('hide event');
  })
  mainWindow.on('closed', () => { 
    console.log('closed event');
  })

  mainWindow.on('close', trayListener);

})();



app.on('window-all-closed', () => {
  app.quit();
});
