var equate = "";
var answer = 0
function ShowAndHide(){
    $('#first').show()
    $('#second').show()
    $('#third').show()
    $('#Calc').hide()
}
function DetermineCalc(equation) {
    ShowAndHide()
    if (equation == "Area") {
        $('#area').show()
        $('#math').hide()
        $('#perimeter').hide()
        $('#volume').hide()

        $('#third').hide()
        $('#Calc').show()
        equate ="area"
    } else if (equation == "Perimeter") {
        $('#perimeter').show()
        $('#math').hide()
        $('#area').hide()
        $('#volume').hide()

        $('#third').hide()
        $('#Calc').show()
        equate ="perimeter"
    } else if (equation == "Volume") {
        $('#volume').show()
        $('#math').hide()
        $('#area').hide()
        $('#perimeter').hide()
        $('#Calc').show()
        equate ="volume"
    } else {
        $('#math').hide()
        $('#area').hide()
        $('#perimeter').hide()
        $('#volume').hide()

        $('#first').hide()
        $('#second').hide()
        $('#third').hide()
    }
}

function MathCalc() {
    var first = parseInt(document.getElementById("first").value)
    var second = parseInt(document.getElementById("second").value)
    var third = parseInt(document.getElementById("third").value)

    if (equate=="area"){
        answer = first * second
    } else if (equate=="perimeter"){
        answer = first * 2 + second * 2
    } else if (equate =="volume"){
        answer = first * second * third
    }
}

function showResult(thingy){
    document.getElementById("answer") = 
}