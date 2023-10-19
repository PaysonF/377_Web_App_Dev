$(document).ready(function() {
    rollDice();
})
//if point = 0 then were on first roll, else on repeat
var point = 0


function checkRoll(roll){
    if (point == 0){ // the frist roll comes out
        if (roll == 7 || roll == 11) {
           // win 
           $("#message").text("You Win!")
        } 
            
        else if (roll == 2 || roll == 3 || roll == 12) {
            $("#message").text("You Lose!")
        } else {
        point = roll;
        }
    } else { //THis is a "re roll" after the point has been set
        if (roll == 7){
            //lose
            $("#message").text("You Lose!")
            $("#message").text("X")
            point = 0
        } else if (roll == point){
            $("#message").text("You Win!")
            $("#message").text("X")
            point = 0
            //win
        }
    }
}

function rollDice() {
    $('.pip').css("visibility", "hidden");
    var roll1 = rollDie(1);
    var roll2 = rollDie(2);

    var total = roll1 + roll2;

    checkRoll(total);

    console.log(total)
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