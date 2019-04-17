import { options } from '../options';
import { GameObject } from './gameObject';
class Fruit extends GameObject{

    constructor(){
        super();
        this.score = 0;
        this.time = 0;
        this.id = '';
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