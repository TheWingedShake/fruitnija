import { Activity } from './activity';
import { logger } from '../loggers/logger';
import { options } from '../options';
import { coordsHelper } from '../utils/coordsHelper';
import { GameObject } from '../fruits/gameObject';
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
        this.objects = [];
        this.isMouseDown = false;
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
                this.objects = [];
                this.stage.removeEventListener("stagemousedown", this.handleMouseDown);
                this.stage.removeEventListener("stagemouseup", this.handleMouseUp);
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
                    setTimeout(() => {
                        this.launchFruit();
                    }, i * 100);
                }
            }
            this.processObjects();
        };
        this.handleMouseDown = () => {
            this.isMouseDown = true;
        };
        this.handleMouseUp = () => {
            this.isMouseDown = false;
        };
        createjs.Ticker.addEventListener("tick", this.handleTick);
        this.stage.addEventListener("stagemousedown", this.handleMouseDown);
        this.stage.addEventListener("stagemouseup", this.handleMouseUp);
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

    processObjects(){
        for(let i = 0; i < this.objects.length; i++){
            this.objects[i].move();
            if(this.objects[i].isOut()){
                this.objects[i].removeShape();
            }
        }
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
        fruit.setShape(fruitShape);
        fruit.setCoords(fruitShape.x, fruitShape.y);
        fruit.initMovement();
        const handleFruitEvent = () => {
            this.player.addScore(fruit.score);
            this.scoreObject.set({text: `Score: ${this.player.score}`});
            this.activeObjectsContainer.removeChild(fruitShape);
            this.objects.splice(this.objects.indexOf(fruit), 1);
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
        };

        fruitShape.on('mouseover', () => {
            if(!this.isMouseDown){
                return;
            }
            handleFruitEvent();
        });
        fruitShape.on('mousedown', () => {
            handleFruitEvent();
        });
        fruitShape.addEventListener('fruitout', () => {
            this.objects.splice(this.objects.indexOf(fruit), 1);
            this.activeObjectsContainer.removeChild(fruitShape);
            fruitShape.removeAllEventListeners();
        });
        this.objects.push(fruit);

        this.activeObjectsContainer.addChild(fruitShape);
    }

    placeCutFruit(fruit, coords, size){
        const cutParts = fruit.getCutParts();
        const initialShift = fruit.getInitedCutPartShift(size);

        this.placeCutPart(fruit, coords, cutParts.l, initialShift, false);
        this.placeCutPart(fruit, coords, cutParts.r, initialShift, true);

        const spotImage = this.assetsLoader.getImage(cutParts.s);
        const spotShape = new createjs.Bitmap(spotImage);
        spotShape.scale = options.imgScale;
        spotShape.x = coords.x;
        spotShape.y = coords.y;
        spotShape.alpha = 0.7;
        spotShape.regX = spotImage.width / 2;
        spotShape.regY = spotImage.height / 2;
        spotShape.rotation = Math.round(Math.random() * 360);

        this.backgroundContainer.addChild(spotShape);       
    }

    placeCutPart(fruit, coords, imgId, initialShift, isRight){
        const partImage = this.assetsLoader.getImage(imgId);
        const partShape = new createjs.Bitmap(partImage);
        partShape.scale = options.imgScale;
        if(isRight){
            partShape.x = coords.x + partShape.scale * partImage.width / 2 + initialShift.right.x;
            partShape.y = coords.y + initialShift.right.y;
        }else{
            partShape.x = coords.x - partShape.scale * partImage.width / 2 + initialShift.left.x;
            partShape.y = coords.y + initialShift.left.y;
        }
        partShape.regX = partImage.width / 2;
        partShape.regY = partImage.height / 2;
        const coordsSift = coordsHelper.calcRotationShift(coords, {x: partShape.x, y: partShape.y}, coords.rotation + (isRight ? initialShift.right.rotation : initialShift.left.rotation));
        partShape.x = coordsSift.x;
        partShape.y = coordsSift.y;
        partShape.rotation = coords.rotation;

        const partObject = new GameObject();
        partObject.setShape(partShape);
        partObject.setCoords(partShape.x, partShape.y, partShape.rotation);
        partObject.setSpeed(fruit.speed);
        partObject.setSpeedX(fruit.speedX);
        partObject.setSpeedY(fruit.speedY);
        partObject.setRotationSpeed(isRight ? fruit.rotationSpeed/4 : -1 * fruit.rotationSpeed/4);
        this.objects.push(partObject);
        partShape.addEventListener('fruitout', () => {
            this.objects.splice(this.objects.indexOf(partObject), 1);
            this.passiveObjectsContainer.removeChild(partShape);
            partShape.removeAllEventListeners();
        });
        this.passiveObjectsContainer.addChild(partShape);
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