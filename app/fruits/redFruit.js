import { Fruit } from './fruit';
class RedFruit extends Fruit{

    constructor(){
        super();
        this.time = 2000;
        this.score = 25;
        this.id = 'redFruit';
    }

    getCutParts(){
        return {
            l: 'redFruitL',
            r: 'redFruitR',
            s: 'redFruitS'
        };
    }

    getInitedCutPartShift(size){
        return {
            right: {
                x: -5,
                y: 0,
                rotation: 0
            },
            left: {
                x: 5,
                y: 0,
                rotation: 0
            }
        };
    }

}

export { RedFruit };