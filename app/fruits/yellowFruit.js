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

}

export { YellowFruit };