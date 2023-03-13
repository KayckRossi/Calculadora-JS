// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.getElementById('input1');
  
//     input.addEventListener('input', (event) => {
//       input.style.color = 'red';
//     });
// //   }); 
// codigo para alterar a cor do texto dentro do input
  
// obtém os elementos da calculadora
const input = document.getElementById('input1');
const btns = document.querySelectorAll('#btns-grups button');

// adiciona eventos de clique aos botões
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;
    if (value === 'del') {
      // remove o último caractere do input
      input.value = input.value.slice(0, -1);
    } else if (value === 'AC') {
      // limpa o input
      input.value = '';
    } else if (value === '=') {
      // calcula a expressão no input
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = 'Erro';
      }
    } else {
      // adiciona o valor do botão ao input
      input.value += value;
    }
  });
});
