document.getElementById("texto").innerHTML = "Nadi Duno"
document.getElementById("nome").innerHTML = "Calculadora"

Adocument.getElementById("foto").setAttribute('src', "https://github.com/nadiduno.png")

function somar() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let soma = parseFloat(numero1) + parseFloat(numero2)
    document.getElementById("resultado").innerHTML = soma
}
function res() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let sub = parseFloat(numero1) - parseFloat(numero2)
    document.getElementById("resultado").innerHTML = sub
}
function mult() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let mult = parseFloat(numero1) / parseFloat(numero2)
    document.getElementById("resultado").innerHTML = mult
}
function div() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let div = parseFloat(numero1) / parseFloat(numero2)
    document.getElementById("resultado").innerHTML = div
}










