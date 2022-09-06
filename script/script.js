const form = document.getElementById('form');

function handleForm(/*e*/) {
  //e.preventDefault()

  //valores dos inputs
  let peso = Number(document.getElementById('peso').value);
  let altura = Number(document.getElementById('altura').value);
  let faixaEtaria = document.getElementById('faixa-etaria').value;
  let mensagem;
  let resultado = document.getElementById('response');

  imc = (peso / (altura * altura)).toFixed(2);

  // Verificando valores recebidos para peso e altura.
  if (!peso || typeof peso !== 'number') {
    alert('Peso inválido');
    return;
  }
  if (!altura || typeof peso !== 'number') {
    alert('Altura inválida');
    return;
  }

  if (faixaEtaria === 'adulto') {
    // Se 'Adulto', realiza o bloco 1.
    // Bloco 1 aqui:
    // ...
    // Fim do bloco 1.
  } else if (faixaEtaria === 'idoso') {
    if (imc <= 22) {
      mensagem = 'Está abaixo do peso recomendado.';
    } else if (imc > 22 && imc < 27) {
      mensagem = 'Peso dentro da faixa recomendada.';
    } else {
      mensagem = 'Ta bem tratado, ta bem tratado...';
    }
  } else alert('Por favor selecione se Adulto ou Idoso. Grato!');

  return (resultado.innerHTML = mensagem);
}

form.addEventListener('submit', handleForm);
