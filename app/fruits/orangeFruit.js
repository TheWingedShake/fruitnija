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

}

export { OrangeFruit };