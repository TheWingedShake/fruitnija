import { assetsManager } from '../assetsManager';
import { options } from '../options';
class Activity{

    constructor(stage){
        this.assetsLoader = assetsManager;
        this.stage = stage;
    }

    setPlayer(player){
        this.player = player;
    }

    setBackground(){
        const bgImage = assetsManager.getImage('background');
        const background = new createjs.Bitmap(bgImage);
        background.x = 0;
        background.y = 0;
        this.backgroundContainer.addChild(background);
        //this.stage.addChild(background);
    }

    onInit(){
        this.backgroundContainer = new createjs.Container(); //for background and secondary objects, like a fruit spot
        this.passiveObjectsContainer = new createjs.Container(); //for cut fruits objects
        this.activeObjectsContainer = new createjs.Container(); //for active fruit objects
        this.interfaceContainer = new createjs.Container(); //for buttons and game info, like a score
        this.stage.addChild(this.backgroundContainer);
        this.stage.addChild(this.passiveObjectsContainer);
        this.stage.addChild(this.activeObjectsContainer);
        this.stage.addChild(this.interfaceContainer);
        this.createUI();
    }

    createUI(){

    }

    onDestroy(){
        
    }

}

export { Activity };