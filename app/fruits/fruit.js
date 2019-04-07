import { options } from '../options';
class Fruit{

    constructor(){
        this.score = 0;
        this.time = 0;
        this.id = '';
    }

    generatePath(imgWidth){
        const xLeftRange = [imgWidth / 2, options.w/3];
        const yTopRange = [100, options.h / 2];
        const xRightRange = [2 * options.w/3, options.w - imgWidth / 2];

        const leftBottomX = Math.round(Math.random() * (xLeftRange[1] - xLeftRange[0])) + xLeftRange[0];
        const leftTopX = Math.round(Math.random() * (xLeftRange[1] - xLeftRange[0])) + xLeftRange[0];
        const rightBottomX = Math.round(Math.random() * (xRightRange[1] - xRightRange[0])) + xRightRange[0];
        const rightTopX = Math.round(Math.random() * (xRightRange[1] - xRightRange[0])) + xRightRange[0];
        const bottomY = options.h + 50;
        const topY = Math.round(Math.random() * (yTopRange[1] - yTopRange[0])) + yTopRange[0];
        const middleTopX = Math.round((leftTopX + rightTopX)/2);

        const path = {};

        /*
            choose fruit direction 
        */
        if(Math.random() > 0.5){
            path.up = [
                leftBottomX, bottomY,
                leftTopX, topY,
                middleTopX, topY
            ];
            path.down = [
                middleTopX, topY,
                rightTopX, topY,
                rightBottomX, bottomY
            ];
        }else{
            path.up = [
                rightBottomX, bottomY,
                rightTopX, topY,
                middleTopX, topY
            ];
            path.down = [
                middleTopX, topY,
                leftTopX, topY,
                leftBottomX, bottomY
            ]
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

}

export { Fruit };