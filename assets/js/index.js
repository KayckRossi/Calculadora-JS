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

const clear = document.getElementById('btn-ac')

const keyEqual = document.getElementById('btn-equal')

let sign = false;

let decimal = false;

keysNum.forEach((el) => {
  el.addEventListener("click", (evt) => {
    sign = false;
    
    if(evt.target.innerHTML=="."){
        if(!decimal){
            decimal = true;
            if(display.innerHTML=="0"){
                display.innerHTML="0."
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
            
        }
    }else{
      if(display.innerHTML=="0"){
        display.innerHTML=""
    }
      
        display.innerHTML+=evt.target.innerHTML
    }
    
  })
})

keysOp.forEach((el) => {
  el.addEventListener("click", (evt) => {

    if (!sign) {
      sign = true
      if (display.innerHTML == "0") {
        display.innerHTML = ""
      }
      if (evt.target.innerHTML == "x") {
        display.innerHTML += "*"
      }
      else {
        display.innerHTML += evt.target.innerHTML
      }
    }
  })
})

clear.addEventListener("click", (evt) => {
  sign = false;
  decimal = false;
  display.innerHTML = "0"
})

keyEqual.addEventListener("click", (evt) => {
  sign = false;
  decimal = false;
  const res=eval(display.innerHTML)
  display.innerHTML=res
})

// made by:KayckRossi 