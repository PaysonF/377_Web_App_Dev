var equate = "boop";
var answer = 0
function ShowAndHide(){
    $('#first').show()
    $('#second').show()
    $('#third').show()
    $('#Calc').hide()
}
function DetermineCalc(equation) {
    ShowAndHide()
    if (document.forms[0].elements[0] == "Area") {
        $('#area').show()
        $('#math').hide()
        $('#perimeter').hide()
        $('#volume').hide()
        alert(woza)
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