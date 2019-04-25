import { Fruit } from './fruit';
class GreenFruit extends Fruit{

    constructor(){
        super();
        this.score = 5;
        this.time = 2500;
        this.id = 'greenFruit';
    }

    getCutParts(){
        return {
            l: 'greenFruitL',
            r: 'greenFruitR',
            s: 'greenFruitS'
        };
    }

    getInitedCutPartShift(size){
        return {
            right: {
                x: -10,
                y: 0,
                rotation: 0
            },
            left: {
                x: 10,
                y: 0,
                rotation: 0
            }
        };
    }

}

export { GreenFruit };