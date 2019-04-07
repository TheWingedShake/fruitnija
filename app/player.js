class Player{

    constructor(){
        this.score = 0;
    }

    addScore(score){
        this.score += score;
    }

    reset(){
        this.score = 0;
    }

}

export { Player };