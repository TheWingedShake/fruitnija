import { Fruit } from './fruit';
class PurpleFruit extends Fruit{

    constructor(){
        super();
        this.score = 15;
        this.time = 2100;
        this.id = 'purpleFruit';
    }

    getCutParts(){
        return {
            l: 'purpleFruitL',
            r: 'purpleFruitR',
            s: 'purpleFruitS'
        };
    }

}

export { PurpleFruit };