'use strict'
const separ = document.getElementById ('separator');
const befor = document.querySelector ('.image-befor');
const afterPic = document.querySelector ('.image-after');

separ.addEventListener('mousedown', (grab))
    function grab () {
        separ.style.cursor = 'grabbing';
    }
separ.addEventListener ("mouseup", (release));
    function release () {
        separ.style.cursor = 'grab';
    }

separ.onmousedown = function (event) {
    event.preventDefault();
    let shiftX = event.clientX - separ.getBoundingClientRect().left;
    document.addEventListener ('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    function onMouseMove (event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - separ.offsetWidth;
        if(newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        separ.style.left = newLeft + 'px';
        afterPic.style.width = newLeft + 18 + 'px';

    }
    function onMouseUp() {
        document.removeEventListener ('mouseup', onMouseUp);
        document.removeEventListener ('mousemove', onMouseMove);
    }
    separ.ondragstart = function () {
        return false;
    }
}








    