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
                x: -size.width / 2,
                y: size.height / 4,
                rotation: 90
            },
            left: {
                x: size.width / 2,
                y: -size.height / 4,
                rotation: 90
            }
        }
    }

}

export { YellowFruit };