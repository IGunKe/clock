import { Tray, Menu, app } from 'electron';
import path from 'path';

export const useTray = (win: any, iconPath: string) => {
    // tray 托盘
    let tray = new Tray(iconPath);
    tray.setToolTip('小向的闹钟');
    tray.on('click', () => {
        console.log('tray');
        
        if (win.isVisible()) {
            win.hide();
        } else {
            win.show();
        }
    });
    // 设置托盘菜单
    tray.on('right-click', () => {
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: () => app.quit()
            }
        ]);
        tray.popUpContextMenu(menuConfig);
    });
};
