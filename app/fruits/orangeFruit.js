import { Fruit } from './fruit';
class OrangeFruit extends Fruit{

    constructor(){
        super();
        this.score = 20;
        this.time = 1700;
        this.id = 'orangeFruit';
    }

    getCutParts(){
        return {
            l: 'orangeFruitL',
            r: 'orangeFruitR',
            s: 'orangeFruitS'
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

export { OrangeFruit };