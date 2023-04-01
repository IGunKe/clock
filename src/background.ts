/*
 * @Author: 向德剑
 * @Date: 2023-03-22 14:39:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-01 16:08:33
 * @FilePath: \clock\src\background.ts
 */
'use strict';

import { app, protocol, BrowserWindow, session } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';
// import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== 'production';
import path from 'path';

import mainHost from '@/api/main.controller';
import { useTray } from '@/api/mainAPI/tray';

const iconPath = path.join(__dirname, './bundled/favicon.ico');

protocol.registerSchemesAsPrivileged([
    { scheme: 'app', privileges: { secure: true, standard: true } }
]);

async function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        title: 'xdj.clock',
        icon: './assets/favicon.ico',
        webPreferences: {
            nodeIntegration: process.env
                .ELECTRON_NODE_INTEGRATION as unknown as boolean,
            contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
        }
    });

    mainHost(win);
    // win.removeMenu();
    if (process.env.WEBPACK_DEV_SERVER_URL) {
        await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
        if (!process.env.IS_TEST) win.webContents.openDevTools();
        useTray(win, iconPath);
    } else {
        createProtocol('app');
        win.loadURL('app://./index.html');
        // win.loadFile(`file://${__dirname}/main.html`);
        useTray(win, iconPath);
    }
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
        try {
            await session.defaultSession.loadExtension(
                path.resolve(__dirname, '../devTools/chrome')
            );
            // await installExtension(VUEJS3_DEVTOOLS);
        } catch (e: any) {
            console.error('Vue Devtools failed to install:', e.toString());
        }
    }
    createWindow();
});

if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', (data) => {
            if (data === 'graceful-exit') {
                app.quit();
            }
        });
    } else {
        process.on('SIGTERM', () => {
            app.quit();
        });
    }
}
