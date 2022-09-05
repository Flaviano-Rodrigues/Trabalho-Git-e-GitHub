const form = document.getElementById("form");

function handleForm(e) {
    e.preventDefault();

    //valores dos inputs
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let faixaEtaria = document.getElementById("faixa-etaria").value;
    
}

form.addEventListener("submit", handleForm);

function calculaImc() {
        let alturaAoQuadrado = altura.value * altura.value;
        let imc = peso.value / alturaAoQuadrado;
        let resultado = document.getElementById("response");
        resultado.innerHTML = imc
        return imc
}