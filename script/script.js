const form = document.getElementById("form")

function handleForm(e) {
    e.preventDefault()

    //valores dos inputs
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let faixaEtaria = document.getElementById("faixa-etaria").value

}

form.addEventListener("submit", handleForm)