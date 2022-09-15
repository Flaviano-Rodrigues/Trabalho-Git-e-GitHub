const form = document.getElementById('form')

function handleForm(/*e*/) {
  //e.preventDefault()

  //valores dos inputs
  let peso = Number(document.getElementById('peso').value.replace(',', '.'))
  let altura = Number(document.getElementById('altura').value.replace(',', '.'))
  let faixaEtaria = document.getElementById('faixa-etaria').value
  let mensagem
  let resultado = document.getElementById('response')

  imc = (peso / (altura * altura)).toFixed(2)

  // Verificando valores recebidos para peso e altura.
  if (!peso || typeof peso !== 'number') {
    alert('Peso inválido')
    return
  }
  if (!altura || typeof peso !== 'number') {
    alert('Altura inválida')
    return
  }

  // O bloco a seguir faz a avaliação do wheight status (Adulto)
  // a partir do resultado do IMC:
  if (faixaEtaria === 'adulto') {
    if (imc < 18.5) {
      mensagem = 'Está abaixo do peso recomendado.'
    } else if (imc <= 24.9) {
      mensagem = 'Peso dentro da faixa recomendada.'
    } else if (imc <= 29.9) {
      mensagem = 'Excesso de peso.'
    } else if (imc <= 34.9) {
      mensagem = 'Obesidade de Classe 1.'
    } else if (imc <= 39.9) {
      mensagem = 'Obesidade de Classe 2.'
    } else {
      mensagem = 'Obesidade de Classe 3.'
    }
    // Esse bloco irá calcular o peso de pessoas "Idosas"
  } else if (faixaEtaria === 'idoso') {
    if (imc <= 22) {
      mensagem = 'Está abaixo do peso recomendado.'
    } else if (imc < 27) {
      mensagem = 'Peso dentro da faixa recomendada.'
    } else {
      mensagem = 'Sobrepeso'
    }
  } else alert('Por favor selecione se Adulto ou Idoso. Grato!')

  return (resultado.innerHTML = mensagem)
}

form.addEventListener('submit', handleForm)
