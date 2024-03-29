import { app, BrowserWindow, BrowserView, ipcMain, nativeTheme } from 'electron';
import path from 'path';


let view: BrowserView;

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system';
});

ipcMain.handle('updateUrl', (_, url) => {
  console.log(url);
  view.webContents.loadURL(url);
});

const createWindow = () => {

  const windowWidth = 800;
  const windowHeight = 600;

  // Create the browser window.
  // ----------
  const mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // mainWindow.webContents.openDevTools();
  // ----------

  // Create the BrowserView
  // ----------
  view = new BrowserView({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });
  mainWindow.setBrowserView(view);

  const viewWidth = 0.5 * windowWidth;
  const viewHeight = 0.5 * windowHeight;
  view.setBounds({
    x: viewWidth,
    y: 0,
    width: viewWidth,
    height: windowHeight,
  });
  view.setAutoResize({
    horizontal: true, vertical: true, width: true, height: true });
  view.webContents.loadURL('https://google.com');
  // ----------
};

app.setAboutPanelOptions({
  applicationName: "Search Pack",
  applicationVersion: "1.0.0",
  version: "Universal",
  credits: "https://github.com/ex-tag",
});

// ----------

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// ----------
