document.getElementById("textCal").innerHTML = "Calculadora"
document.getElementById("name").innerHTML = "<💜 /> @nadiduno"
// document.getElementById("foto").setAttribute('src', "https://github.com/nadiduno.png")

function readNumbers() {
    let number1 = document.getElementById('number1').value.replace(',', '.')
    let number2 = document.getElementById('number2').value.replace(',', '.')
}
function sum() {
    readNumbers()
    let soma = parseFloat(number1) + parseFloat(number2)
    document.getElementById("resulOpe").innerHTML = soma
}
function res() {
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let sub = parseFloat(number1) - parseFloat(number2)
    document.getElementById("resulOpe").innerHTML = sub
}
function mult() {
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let mult = parseFloat(number1) * parseFloat(number2)
    document.getElementById("resulOpe").innerHTML = mult
}
function div() {
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let div = parseFloat(number1) / parseFloat(number2)
    document.getElementById("resulOpe").innerHTML = div
}
function clear() {
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""
    document.getElementById("resulOpe").value = ""
}











