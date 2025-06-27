//Pegar os elementos
const area1 = document.querySelector('#area1')
const area2 = document.querySelector('#area2')
const resultado = document.querySelector('#resultado')

//Função que calcula
const calculo = (operador) => {
  let n1 = Number(area1.value)
  let n2 = Number(area2.value)
  let res = 0

  if(operador == '+'){
    res = n1+n2
  }else if (operador == '-'){
    res = n1-n2
  }else if(operador == '*'){
    res = n1*n2
  }else if(operador == '/'){
    res = n1/n2
  }
  resultado.value=res
};
//Adicionar evento de click nos botões
['mais', 'menos', 'multiplicar', 'dividir'].forEach(el => {
  document.getElementById(el).addEventListener('click', () => {
    const operador = document.getElementById(el).innerText;
    calculo(operador);
  });
});

