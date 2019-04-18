import { Activity } from './activity';
import { logger } from '../loggers/logger';
import { options } from '../options';
import { RedFruit } from '../fruits/redFruit';
import { BlueFruit } from '../fruits/blueFruit';
import { GreenFruit } from '../fruits/greenFruit';
import { OrangeFruit } from '../fruits/orangeFruit';
import { PurpleFruit } from '../fruits/purpleFruit';
import { YellowFruit } from '../fruits/yellowFruit';
class GameActivity extends Activity{

    constructor(stage){
        logger.log('GameActivity created');
        super(stage);
        this.fruits = [RedFruit, BlueFruit, OrangeFruit, YellowFruit, GreenFruit, PurpleFruit];
        this.time = 30;
        this.nextFruitLaunch = options.fruitReloadTime;
        this.fruitCountJumpTime = options.fruitTimeStep;
        this.fruitLaunchCount = options.fruitStartCount;
    }

    onInit(){
        super.onInit();
        this.setBackground();
        this.handleTick = () => {
            this.time -=  1 / createjs.Ticker.framerate;
            this.nextFruitLaunch -= 1 / createjs.Ticker.framerate;
            this.fruitCountJumpTime -= 1 / createjs.Ticker.framerate;
            this.timeObject.set({text: `Time: ${Math.round(this.time)}`});
            if(this.time <= 0){
                createjs.Ticker.removeEventListener("tick", this.handleTick);
                this.stage.dispatchEvent('nextAcitity');
                return;
            }
            if(this.fruitCountJumpTime <= 0){
                this.fruitLaunchCount++;
                this.fruitCountJumpTime = options.fruitTimeStep;
            }
            if(this.nextFruitLaunch <= 0){
                this.nextFruitLaunch = options.fruitReloadTime;
                for(let i = 0; i < this.fruitLaunchCount; i++){
                    this.launchFruit();
                }
            }
        };
        createjs.Ticker.addEventListener("tick", this.handleTick);
    }

    createUI(){
        this.scoreObject = new createjs.Text(`Score: ${this.player.score}`, "20px 'Comic Sans'", "#ff7700");
        this.scoreObject.x = 25;
        this.scoreObject.y = 25;
        this.scoreObject.textBaseline = "alphabetic";
        this.interfaceContainer.addChild(this.scoreObject);
        this.timeObject = new createjs.Text(`Time: ${Math.round(this.time)}`, "20px 'Comic Sans'", "#ff7700");
        this.timeObject.x = options.w - 95;
        this.timeObject.y = 25;
        this.timeObject.textBaseline = "alphabetic";
        this.interfaceContainer.addChild(this.timeObject);
    }

    launchFruit(){
        const fruit = this.getRandomFruit();
        const imgFruit = this.assetsLoader.getImage(fruit.id);
        const path = fruit.generatePath(imgFruit.width);
        const fruitShape = new createjs.Bitmap(imgFruit);
        fruitShape.scale = options.imgScale;
        fruitShape.regX = imgFruit.width / 2;
        fruitShape.regY = imgFruit.height / 2;
        fruitShape.x = path.up[0];
        fruitShape.y = options.h + options.fruitStartYOffset;

        fruitShape.on('click', () => {
            this.player.addScore(fruit.score);
            this.scoreObject.set({text: `Score: ${this.player.score}`});
            this.activeObjectsContainer.removeChild(fruitShape);
            fruit.onCut();
            this.placeCutFruit(
                fruit,
                {
                    x: fruitShape.x,
                    y: fruitShape.y,
                    rotation: fruitShape.rotation
                },
                {
                    width: fruitShape.image.width,
                    height: fruitShape.image.height
                }
            );
        });
        createjs.Tween.get(fruitShape, {loop: false, onComplete: () => {
            this.activeObjectsContainer.removeChild(fruitShape);
        }})
        .to({guide: {path: path.up}, rotation: 360}, fruit.time, createjs.Ease.getPowOut(1.3))
        .to({guide: {path: path.down}, rotation: 720}, fruit.time, createjs.Ease.getPowIn(1.3));

        this.activeObjectsContainer.addChild(fruitShape);
    }

    placeCutFruit(fruit, coords, size){
        const cutParts = fruit.getCutParts();
        const initialShift = fruit.getInitedCutPartShift(size);

        const leftPartImage = this.assetsLoader.getImage(cutParts.l);
        const leftPartShape = new createjs.Bitmap(leftPartImage);
        leftPartShape.scale = options.imgScale;
        leftPartShape.x = coords.x - leftPartShape.scale * leftPartImage.width / 2 + initialShift.left.x;
        leftPartShape.y = coords.y + initialShift.left.y;
        leftPartShape.regX = leftPartImage.width / 2;
        leftPartShape.regY = leftPartImage.height / 2;

        const rightPartImage = this.assetsLoader.getImage(cutParts.r);
        const rightPartShape = new createjs.Bitmap(rightPartImage);
        rightPartShape.scale = options.imgScale;
        rightPartShape.x = coords.x + rightPartShape.scale * rightPartImage.width / 2 + initialShift.right.x;
        rightPartShape.y = coords.y + initialShift.right.y;
        rightPartShape.regX = rightPartImage.width / 2;
        rightPartShape.regY = rightPartImage.height / 2;

        const spotImage = this.assetsLoader.getImage(cutParts.s);
        const spotShape = new createjs.Bitmap(spotImage);
        spotShape.scale = options.imgScale;
        spotShape.x = coords.x;
        spotShape.y = coords.y;
        spotShape.alpha = 0.7;
        spotShape.regX = spotImage.width / 2;
        spotShape.regY = spotImage.height / 2;

        this.passiveObjectsContainer.addChild(leftPartShape);
        this.passiveObjectsContainer.addChild(rightPartShape);
        this.backgroundContainer.addChild(spotShape);
        this.fallDownCutShape(leftPartShape, {x: leftPartShape.x - size.width / 2, y: leftPartShape.y, rotation: -90});
        this.fallDownCutShape(rightPartShape, {x: rightPartShape.x + size.width / 2, y: rightPartShape.y, rotation: 90});        
    }

    fallDownCutShape(shape, coords){
        const fallTime = this.getFallTime(coords.y);
        createjs.Tween.get(shape, {loop: false, onComplete: () => {
            this.passiveObjectsContainer.removeChild(shape);
        }})
        .to({x: coords.x, y: options.h + options.fruitStartYOffset, rotation: coords.rotation}, fallTime, createjs.Ease.getPowIn(2));
    }

    getRandomFruit(){
        const index = Math.floor(Math.random() * this.fruits.length);
        return new this.fruits[index]();
    }

    getFallTime(y){
        return options.fallTime * (options.h - y)/options.h; 
    }

}

export { GameActivity };