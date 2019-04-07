import { Activity } from './activity';
import { logger } from '../loggers/logger';
import { options } from '../options';
class StartActivity extends Activity{

    constructor(stage){
        logger.log('StartActivity created');
        super(stage);
    }

    onInit(){
        super.onInit();
        this.setBackground();
    }

    createUI(){
        this.createStartButton();
    }

    onDestroy(){

    }

    createStartButton(){
        this.handleStartButtonClick = () => {
            startButton.removeEventListener('click', this.handleStartButtonClick);
            createjs.Tween.get(startButton, {loop: false, onComplete: () => {
                this.stage.dispatchEvent('nextAcitity');
            }})
            .to({scale: 0.9}, 250, createjs.Ease.quadOut);
        };
        const image = this.assetsLoader.getImage('startButton');
        const startButton = new createjs.Bitmap(image);
        startButton.x = options.w / 2;
        startButton.y = options.h / 2;
        startButton.regX = image.width / 2;
        startButton.regY = image.height / 2;
        this.interfaceContainer.addChild(startButton);
        startButton.addEventListener('click', this.handleStartButtonClick);
    }

}

export { StartActivity };