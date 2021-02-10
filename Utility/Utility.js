class Utility{
    dayStake = 100;
    everyGameBet = 1;
    day =1;
    winAmt = 0;
    looseAmt = 0;

    checkWinOrLoose(){
        return Math.floor(Math.random()*2);
    }
    gameGambler(){
        while(this.dayStake !== 150 && this.dayStake !== 50){

            let result = this.checkWinOrLoose();
            if(result === 1){
                console.log("Gambler Wins the game");
                this.dayStake += 1;

                if(this.day<=20){
                    this.winAmt += 1;
                }
                this.day += 1;
            }
            if(result === 0){
                console.log("Gambler Looses the game");
                this.dayStake -= 1;

                if(this.day<=20){
                    this.looseAmt -= 1;
                }
                this.day += 1;
            }
        }
        if(this.dayStake == 150){
            console.log("Gambler wins 50% of the stake");
            console.log("After winning total amount is: "+this.dayStake);
        }
        else{
            console.log("Gambler loose 50% of the stake");
            console.log("After loosing total amount is: "+this.dayStake);
        }
        console.log("After 20 days Total Amount Won is: "+this.winAmt);
        console.log("After 20 days Total Amount Lost is: "+this.looseAmt);
    }
}

module.exports = new Utility();