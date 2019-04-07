import { StartActivity } from './activities/startActivity';
import { GameActivity } from './activities/gameActivity';
import { ResultActivity } from './activities/resultActivity';
import { assetsManager } from './assetsManager';
import { imgsUrls } from './options';
import { soundUrls } from './options';
import { logger } from './loggers/logger';
import { Player } from './player';

class GameApp{

    constructor(options){
        const canvas = document.getElementById('gameapp');
        this.stage = new createjs.Stage(canvas);
        this.stage.enableDOMEvents(true);
        createjs.Ticker.addEventListener("tick", this.stage);
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