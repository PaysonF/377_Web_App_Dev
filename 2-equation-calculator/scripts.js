function DetermineCalc(equation) {
    $('#first').show()
    $('#second').show()
    $('#third').show()
    if (equation == "Area") {
        $('#area').show()
        $('#math').hide()
        $('#perimeter').hide()
        $('#volume').hide()

        $('#third').hide()
    } else if (equation == "Perimeter") {
        $('#perimeter').show()
        $('#math').hide()
        $('#area').hide()
        $('#volume').hide()

        $('#third').hide()
    } else if (equation == "Volume") {
        $('#volume').show()
        $('#math').hide()
        $('#area').hide()
        $('#perimeter').hide()
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

}

function AreaCalc() {
var answer = first * second
}

function PerimeterCalc() {
var answer = first * 2 + second * 2
}

function VolumeCalc() {
var answer = first * second * third
}