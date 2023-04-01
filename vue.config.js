const { defineConfig } = require('@vue/cli-service');

// element plus
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            scss: {
                additionalData: `@import "@/assets/global.scss";`
            }
        }
    },
    configureWebpack: {
        // target: 'electron-renderer',
        plugins: [
            AutoImport({
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        prefix: 'Icon'
                    })
                ]
                // dts: path.resolve(pathSrc, 'auto-imports.d.ts')
            }),
            Components({
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        enabledCollections: ['ep']
                    })
                ]
            }),
            Icons({
                autoInstall: true
            })
            // new NodePolyfillPlugin()
        ]
        // resolve: {
        //     fallback: {
        //         fs: require.resolve('browserify-fs')
        //         // fs: false
        //     }
        // }
    },
    pluginOptions: {
        electronBuilder: {
            chainWebpackMainProcess: (config) => {
                config.output.filename((file) => {
                    if (file.chunk.name === 'index') {
                        return 'background.js';
                    } else {
                        return '[name].js';
                    }
                });
            },
            nodeIntegration: true,
            // 设置应用主进程的入口
            mainProcessFile: 'src/background.ts',
            // 设置应用渲染进程的入口
            rendererProcessFile: 'src/main.ts',
            customFileProtocol: '../',
            // 打包选项
            builderOptions: {
                // 解决的问题：在安装到电脑后，系统通知无法工作
                appId: 'alarm.clock.xdj.vu3', // 软件id
                productName: '闹钟', // 打包后的名称
                // windows系统相关配置
                asar: false,
                win: {
                    // 应用图标路径（Windows 系统中 icon 需要 256 * 256 的 ico 格式图片）
                    icon: './src/assets/favicon.ico',
                    target: {
                        target: 'nsis',
                        // 支持 64 位的 Windows 系统
                        arch: ['x64']
                    }
                },
                nsis: {
                    // 如果为false，想要给电脑所有用户安装必须使用管理员权限
                    allowElevation: true,
                    // 是否一键安装
                    oneClick: false,
                    // 允许修改安装目录
                    allowToChangeInstallationDirectory: true,
                    deleteAppDataOnUninstall: true,
                    createDesktopShortcut: true,
                    guid: 'alarm.clock.xdj.vu3', // 软件id
                    include: './installer.nsh'
                }
                
            }
        }
    }
});
