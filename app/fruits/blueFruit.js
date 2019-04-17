import { Fruit } from './fruit';
class BlueFruit extends Fruit{

    constructor(){
        super();
        this.score = 30;
        this.time = 1500;
        this.id = 'blueFruit';
    }

    getCutParts(){
        return {
            l: 'blueFruitL',
            r: 'blueFruitR',
            s: 'blueFruitS'
        };
    }

    getInitedCutPartShift(size){
        return {
            right: {
                x: -size.width/4,
                y: 0,
                rotation: 0
            },
            left: {
                x: size.width/4,
                y: 0,
                rotation: 0
            }
        };
    }

}

export { BlueFruit };