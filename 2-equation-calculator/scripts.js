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
        $('#third').hide()
        $('#Calc').show()
        equate ="area"
    } else if (equation == "Perimeter") {
        $('#third').hide()
        $('#Calc').show()
        equate ="perimeter"
    } else if (equation == "Volume") {
        $('#Calc').show()
        equate ="volume"
    } else {
        $('#first').hide()
        $('#second').hide()
        $('#third').hide()
    }
}