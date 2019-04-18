import { options } from '../options';
import { GameObject } from './gameObject';
class Fruit extends GameObject{

    constructor(){
        super();
        this.score = 0;
        this.time = 0;
        this.id = '';
    }

    setShape(shape){
        this.shape = shape;
    }

    initMovement(){
        const randomAdditionSpeed = Math.floor(Math.random() * (options.maxSpeed - options.minSpeed));
        this.speed = 450 + randomAdditionSpeed;
        const middleX = options.w / 2;
        const b = options.h / 2;
        const a = (this.shape.x < middleX) ? (middleX - this.shape.x) : (this.shape.x - middleX);
        const tan = b / a;
        const angle = Math.atan(tan);
        this.speedY = Math.sin(angle) * this.speed;
        this.speedX = (1 - Math.sin(angle)) * this.speed;
        if(this.shape.x > middleX){
            this.speedX *= -1;
        }
        this.rotationSpeed = Math.floor(Math.random() * options.maxRotationSpeed);
    }

    move(){
        this.shape.y -= this.speedY / createjs.Ticker.framerate;
        this.shape.x += this.speedX / createjs.Ticker.framerate;
        this.speedY += options.acceleration / createjs.Ticker.framerate;
        this.shape.rotation += this.rotationSpeed / createjs.Ticker.framerate;
    }

    isOut(){
        if(Math.abs(this.speedY) > this.speed && this.shape.y > options.h){
            return true;
        }
        return false;
    }

    removeShape(){
        this.shape.dispatchEvent('fruitout');
    }

    generatePath(imgWidth){
        const xLeftRange = [imgWidth / 2, options.w/3];
        const xRightRange = [2 * options.w/3, options.w - imgWidth / 2];

        const leftBottomX = Math.round(Math.random() * (xLeftRange[1] - xLeftRange[0])) + xLeftRange[0];
        const rightBottomX = Math.round(Math.random() * (xRightRange[1] - xRightRange[0])) + xRightRange[0];

        const path = {};

        /*
            choose fruit direction 
        */
        if(Math.random() > 0.5){
            path.up = [
                leftBottomX
            ];
        }else{
            path.up = [
                rightBottomX
            ];
        }
        
        return path;
    }

    getCutParts(){
        return {
            l: 'blueFruitL',
            r: 'blueFruitR',
            s: 'blueFruitS'
        };
    }

    onCut(){
        createjs.Sound.play('swordUnsheathing');
    }

    getInitedCutPartShift(size){
        return {
            right: {
                x: 0,
                y: 0,
                rotation: 0
            },
            left: {
                x: 0,
                y: 0,
                rotation: 0
            }
        };
    }

}

export { Fruit };