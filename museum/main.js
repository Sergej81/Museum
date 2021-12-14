const prev = document.getElementById('btn-prev');
    next = document.getElementById('btn-next');
    slides = document.querySelectorAll ('.slide')
    squares = document.querySelectorAll('.square');
    numbers = document.querySelectorAll('.number');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}
const activeSquares = n => {
    for(square of squares) {
        square.classList.remove('active')
    }
    squares[n].classList.add('active')
}
const activeNumber = n => {
    for(number of numbers) {
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
    if (index == slides.length -1) {
        index = 0;
        prepareCurrentSlide(index);
    }else {
        index++;
        prepareCurrentSlide(index);
    }
}
const prevSlide = () => {
    if (index == 0) {
        index = slides.length -1;
        prepareCurrentSlide(index);

    }else {
        index--;
        prepareCurrentSlide(index);
    }
}    
squares.forEach ((item, indexSquare) => {
    item.addEventListener ('click', ()=> {
        index = indexSquare;
        prepareCurrentSlide(index);
    })
})

next.addEventListener ('click',nextSlide);
prev.addEventListener ('click',prevSlide);
//setInterval(nextSlide, 2000);