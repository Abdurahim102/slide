const carusel = document.querySelector('.carusel')
const left = document.querySelector('.left_btn')
const right = document.querySelector('.right_btn')

console.log(1);
let idex = 0;

right.addEventListener("click",()=>{
    idex++;
    console.log('ishladi');
    if (idex>2) {
        idex =2
    }
    carusel.style.transform = `translateX(${idex * -980}px)`

})

left.addEventListener("click",()=>{
    idex--;

    if (idex<0) {
        idex = 0;
    }
    carusel.style.transform = `translateX(${idex * -980}px)`

})

