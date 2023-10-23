$(document).ready(function() {
    rollDice();
})
//if point = 0 then were on first roll, else on repeat
var MINIUM_BET = 5;
var STARTING_FUNDS = 50;

var point = 0;
var bet = 0;
var winnings = STARTING_FUNDS;




function checkRoll(roll){
    if (point == 0){ // the first roll comes out
        if (roll == 7 || roll == 11) {
            endRound(true)
        } 
            
        else if (roll == 2 || roll == 3 || roll == 12) {
            endRound(false)
        } else {
        point = roll;
        }
    } else { //THis is a "re roll" after the point has been set
        if (roll == 7){
            //lose
            endRound(true)
        } else if (roll == point){
            endRound(false)
        }
    }
    $("#point").text(roll)
    $("#winnings").text(winnings)
}

function endRound(win) {
    if (win) {
        $("#message").text("You Win")
        winnings += bet;
    } else {
        $("#message").text("You Lose!")
        winnings -= bet;
    }

    console.log("Winnings: " + winnings);

    $("#point").text("X");
    $("#bet").val("");
    $("#bet").prop("disabled", false);
    $("#winnings").text("$" + winnings);
}


function rollDice() {
    if (point > 0 || validateBet()) {
        $("#point").text("X");
        $("#message").text("");
        var roll1 = rollDie(1);
        var roll2 = rollDie(2);
        var total = roll1 + roll2;
        checkRoll(total);
    } else {
        
    }
    
   
    console.log(total)
}

function validateBet() {
    bet = parseInt($("#bet").val());

    console.log("Bet: " + bet);

    if (isNaN(bet) || bet < MINIUM_BET || bet > winnings) {
        return false;
    }

    $("#bet").prop("disabled", true);
    return true;
}


function rollDie(dieNum){
    var roll = Math.floor(Math.random() * 6 + 1)

    if(roll == 1) {
        $("#d" + dieNum + "p4").css("visibility", "visible");
    } else if (roll == 2) {
        $("#d" + dieNum + "p1, #d" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 3) {
        $("#d" + dieNum + "p1, #d" + dieNum + "p4, #d" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 4) {
        $("#d" + dieNum + "p1, #d" + dieNum + "p3, #d" + dieNum + "p5, #d" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 5) {
        $("#d" + dieNum + "p1, #d" + dieNum + "p2, #d" + dieNum + "p3, #d" + dieNum + "p5, #d" + dieNum + "p6, #d" + dieNum + "p7").css("visibility", "visible");
    } else {
        $("#d" + dieNum + "p1, #d" + dieNum + "p2, #d" + dieNum + "p3, #d" + dieNum + "p5, #d" + dieNum + "p6, #d" + dieNum + "p7").css("visibility", "visible");
    }
    return roll;
}