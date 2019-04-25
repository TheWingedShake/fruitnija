import { Fruit } from './fruit';
class YellowFruit extends Fruit{

    constructor(){
        super();
        this.score = 10;
        this.time = 2300;
        this.id = 'yellowFruit';
    }

    getCutParts(){
        return {
            l: 'yellowFruitL',
            r: 'yellowFruitR',
            s: 'yellowFruitS'
        };
    }

    getInitedCutPartShift(size){
        return {
            right: {
                x: -20,
                y: 0,
                rotation: 90
            },
            left: {
                x: 20,
                y: 0,
                rotation: 90
            }
        };
    }

}

export { YellowFruit };