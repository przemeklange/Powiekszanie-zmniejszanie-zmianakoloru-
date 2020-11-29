const btn1 = document.querySelector('.sizeUp');
const btn2 = document.querySelector('.sizeDown');
const btn3 = document.querySelector('.color');
const p = document.querySelector('p');

let i = 36;
 
const powiekszenie = () => {
    i += 5;
    p.style.fontSize = i + 'px'
}

const pomniejszenie = () => {
    i -= 5;
    p.style.fontSize = i + 'px'
}

const changecolor = () => {
    const randomColor = Math.floor(Math.random()*16151412).toString(16);
    p.style.color = '#' + randomColor;
}
btn1.addEventListener('click', powiekszenie);
btn2.addEventListener('click', pomniejszenie);
btn3.addEventListener('click', changecolor);