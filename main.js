const { app, BrowserWindow } = require("electron");
const path = require("path");
const serve = require("electron-serve");
const loadURL = serve({ directory: "public" });

let mainWindow;

function isDev() {
  return !app.isPackaged;
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: isDev()
      ? path.join(process.cwd(), "src/images/favicon.webp")
      : path.join(__dirname, "/public/icons/icon-512x512.png"),
    // icon: path.join(__dirname, 'public/icons/icon-512x512.png'),
    show: false,
    autoHideMenuBar: true,
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:8000/");
  } else {
    loadURL(mainWindow);
  }

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
