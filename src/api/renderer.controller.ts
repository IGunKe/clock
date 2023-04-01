import {ipcRenderer} from 'electron';

export const minwin = function () {
    console.log('最小化');
      ipcRenderer.send('window-minimize', 'minwin');
};
export const maxwin = function () {
    console.log('最大化');
      ipcRenderer.send('window-maximize', 'manwin');
};
export const closewin = function () {
    console.log('关闭');
      ipcRenderer.send('window-close', 'closewin');
};