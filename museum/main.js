'use strict'
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll ('.slide');
const squares = document.querySelectorAll('.square');
const numbers = document.querySelectorAll('.number');
let order = 0;

const activeSlide = n => {
    for(let slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}
const activeSquares = n => {
    for(let square of squares) {
        square.classList.remove('active')
    }
    squares[n].classList.add('active')
}
const activeNumber = n => {
    for(let number of numbers) {
        number.classList.remove('active')
    }
    numbers[n].classList.add('active')
}
const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeSquares(ind);
    activeNumber(ind);
}
const nextSlide = () => {
    if (order == slides.length -1) {
        order = 0;
        prepareCurrentSlide(order);
    }else {
        order++;
        prepareCurrentSlide(order);
    }
}
const prevSlide = () => {
    if (order == 0) {
        order = slides.length -1;
        prepareCurrentSlide(order);

    }else {
        order--;
        prepareCurrentSlide(order);
    }
}    
squares.forEach ((item, orderSquare) => {
    item.addEventListener ('click', ()=> {
        order = orderSquare;
        prepareCurrentSlide(order);
    })
})

next.addEventListener ('click',nextSlide);
prev.addEventListener ('click',prevSlide);
//setInterval(nextSlide, 2000);