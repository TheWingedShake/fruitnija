import { GameApp } from './gameApp';
window.onload = () => {
    createjs.MotionGuidePlugin.install();
    const gameApp = new GameApp();
    gameApp.init();
};
