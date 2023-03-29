// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.getElementById('input1');
  
//     input.addEventListener('input', (event) => {
//       input.style.color = 'red';
//     });
// //   }); 
// codigo para alterar a cor do texto dentro do input
  
const keysNum = [...document.querySelectorAll('.num')]

const keysOp = [...document.querySelectorAll('.op')]

const keyResults = document.querySelector('.res')

const display = document.querySelector('.display-p')

keysNum.forEach((el)=>{
  el.addEventListener("click",(evt)=>{
    display.innerHTML+=evt.target.innerHTML
  })
})

keysOp.forEach((el)=>{
  el.addEventListener("click",(evt)=>{
    display.innerHTML+=evt.target.innerHTML
  })
})