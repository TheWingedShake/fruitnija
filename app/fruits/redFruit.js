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

}

export { RedFruit };