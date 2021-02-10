class Utility{
    dayStake = 100;
    everyGameBet = 1;

    checkWinOrLoose(){
        return Math.floor(Math.random()*2);
    }
    gameGambler(){
        while(this.dayStake !== 150 && this.dayStake !== 50){
            let result = this.checkWinOrLoose();
            if(result === 1){
                console.log("Gambler Wins the game");
                this.dayStake += 1;
            }
            if(result === 0){
                console.log("Gambler Looses the game");
                this.dayStake -= 1;
            }
        }
        if(this.dayStake == 150){
            console.log("Gambler wins 50% of the stake");
            console.log("After winning total amount is: ");
        }
        else{
            console.log("Gambler loose 50% of the stake");
            console.log("After loosing total amount is: ");
        }
        console.log(this.dayStake);
    }
}

module.exports = new Utility();