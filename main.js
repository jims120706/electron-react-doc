const { app, BrowserWindow } = require('electron')
// 判断环境
const isDev = require('electron-is-dev')

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 680,
		webPreferences: {
			nodeIntegration: true
		}
	})
	// 根据环境判断监听的url
	const urlLocation = isDev ? 'http://localhost:3000' : 'todo'
	mainWindow.loadURL(urlLocation)
})