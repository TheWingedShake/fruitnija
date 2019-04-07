import { GameApp } from './gameApp';
const options = {
    width: 397,
    height: 632
};
window.onload = () => {
    createjs.MotionGuidePlugin.install();
    const gameApp = new GameApp(options);
    gameApp.init();
};
