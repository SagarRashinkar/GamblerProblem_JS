class Utility{
    dayStake = 100;
    everyGameBet = 1;

    checkWinOrLoose(){
        return Math.floor(Math.random()*2);
    }
    gameGambler(){
        let result = this.checkWinOrLoose();
        if(result === 1){
            console.log("Gambler Wins the game");
            this.dayStake += 1;
        }
        if(result === 0){
            console.log("Gambler Looses the game");
            this.dayStake -= 1;
        }
        console.log(this.dayStake);
    }
}

module.exports = new Utility();