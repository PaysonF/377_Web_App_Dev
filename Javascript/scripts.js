    function testArray() {
    
    var grades = [ 79, 80, 100, 94, 83, 92 ];

    document.getElementById("grades").innerHTML = "your grades are " + grades;

    var total = 0;
    for (var i = 0; i < grades.length; i++) {
        total =+ grades[i];
    }

    var average = total / grades.length;

    document.getElementById("average").innerHTML = "Your average is: " + average;
}

function dealCard(){
    var deck = getDeckOfCards();

    var card = deck[Math.floor(Math.random() * deck.length)];
    document.getElementById("card").innerHTML = "Your card is the " + card.rank + " of " + card.suit;
}

function getDeckofCards(){
    var deck = [];

    for (var rank =1; rank <= 13; rank++){
        
        for (var suit=1; rank <= 4; rank++)
            var suitText="";
        if(suit == 1) {
            suitText = "Hearts"
        } else if(suit == 2) {
            suitText = "Spades"
        } else if(suit == 3) {
            suitText = "Clubs"
        } else {
            suitText = "Diamonds"
        }
    }


    var card = { 'rank': rank, 'suit': suitText}
    deck.push(card);

}