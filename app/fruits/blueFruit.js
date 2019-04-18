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

}

export { BlueFruit };