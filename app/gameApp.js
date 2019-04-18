import { StartActivity } from './activities/startActivity';
import { GameActivity } from './activities/gameActivity';
import { ResultActivity } from './activities/resultActivity';
import { assetsManager } from './assetsManager';
import { imgsUrls } from './options';
import { soundUrls } from './options';
import { logger } from './loggers/logger';
import { Player } from './player';

class GameApp{

    constructor(){
        const canvas = document.getElementById('gameapp');
        this.stage = new createjs.Stage(canvas);
        this.stage.enableDOMEvents(true);
        createjs.Ticker.interval = 30;
        createjs.Ticker.addEventListener("tick", this.stage);
        createjs.Touch.enable(this.stage, false, true);
        this.stage.preventSelection = false;
        this.stage.enableMouseOver(10);
        this.currentActivityIndex = 0;
        this.activities = [
            StartActivity,
            GameActivity,
            ResultActivity
        ];
        this.player = new Player();
    }

    init(){
        assetsManager.loadSounds(soundUrls);
        assetsManager.loadImage(imgsUrls)
        .then(() => {
            logger.log('Resources loaded.');
            this.listenEvents();
            this.runActivity(this.currentActivityIndex);
        })
        .catch(error => {
            logger.error(error);
        });
    }

    runActivity(index){
        if(this.activities[index]){
            const activity = new this.activities[index](this.stage);
            activity.setPlayer(this.player);
            activity.onInit();
        }
    }

    listenEvents(){
        this.stage.addEventListener('nextAcitity', () => {
            this.stage.removeAllChildren();
            this.currentActivityIndex++;
            this.runActivity(this.currentActivityIndex);
        });
    }

}

export { GameApp };