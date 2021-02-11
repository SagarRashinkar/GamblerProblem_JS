const util = require('./Utility/Utility');
const input = require('readline-sync');

do{
    util.gameGambler();
    util.checkLuckyUnlucky();
    var response = input.question("Do you want to play more (Y/N) || (y/n) :");
}while(response === 'y' || response === 'Y');