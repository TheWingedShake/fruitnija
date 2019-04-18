import { options } from '../options';
class GameObject{

    constructor(){
        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.rotationSpeed = 0;
        this.x = 0;
        this.y = 0;
        this.rotation = 0;
    }

    setSpeed(speed){
        this.speed = speed;
    }

    setSpeedY(speedY){
        this.speedY = speedY;
    }

    setSpeedX(speedX){
        this.speedX = speedX;
    }

    setRotationSpeed(rotationSpeed){
        this.rotationSpeed = rotationSpeed;
    }

    setShape(shape){
        this.shape = shape;
    }

    setCoords(x = 0, y = 0, rotation = 0){
        this.x = x;
        this.y = y;
        this.rotation = rotation;
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
        this.x += this.speedX / createjs.Ticker.framerate;
        this.y -= this.speedY / createjs.Ticker.framerate;
        this.rotation += this.rotationSpeed / createjs.Ticker.framerate;
        this.speedY += options.acceleration / createjs.Ticker.framerate;
        this.shape.y = this.y;
        this.shape.x = this.x;
        this.shape.rotation = this.rotation;
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

}

export { GameObject };