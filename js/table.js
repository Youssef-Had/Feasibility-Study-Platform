let row1 = document.querySelector('.row-1');
let row1Array = row1.querySelectorAll('input');

let row2 = document.querySelector('.row-2');
let row2Array = row2.querySelectorAll('input');

let row3 = document.querySelector('.row-3');
let row3Array = row3.querySelectorAll('input');

let row4 = document.querySelector('.row-4');
let row4Array = row4.querySelectorAll('input');

let resultRow1 = document.querySelector('.result-row-1');
let resultRow1Array = resultRow1.querySelectorAll('input');

let row5 = document.querySelector('.row-5');
let row5Array = row5.querySelectorAll('input');

let resultRow2 = document.querySelector('.result-row-2');
let resultRow2Array = resultRow2.querySelectorAll('input');

let row6 = document.querySelector('.row-6');
let row6Array = row6.querySelectorAll('input');

let row7 = document.querySelector('.row-7');
let row7Array = row7.querySelectorAll('input');

let resultRow3 = document.querySelector('.result-row-3');
let resultRow3Array = resultRow3.querySelectorAll('input');

let row8 = document.querySelector('.row-8');
let row8Array = row8.querySelectorAll('input');

let row9 = document.querySelector('.row-9');
let row9Array = row9.querySelectorAll('input');

let row10 = document.querySelector('.row-10');
let row10Array = row10.querySelectorAll('input');

let resultRow4 = document.querySelector('.result-row-4');
let resultRow4Array = resultRow4.querySelectorAll('input');

let resultRow5 = document.querySelector('.result-row-5');
let resultRow5Array = resultRow5.querySelectorAll('input');

let row11 = document.querySelector('.row-11');
let row11Array = row11.querySelectorAll('input');

let row12 = document.querySelector('.row-12');
let row12Array = row12.querySelectorAll('input');

let resultRow6 = document.querySelector('.result-row-6');
let resultRow6Array = resultRow6.querySelectorAll('input');

let resultRow7 = document.querySelector('.result-row-7');
let resultRow7Array = resultRow7.querySelectorAll('input');


let allInputArray = document.querySelectorAll('.input-number');
allInputArray.forEach(inputItem => {
    inputItem.addEventListener('input', () => {
        for (let i = 0; i < 4; i++) {
            resultRow1Array[i].value = row1Array[i].value - row2Array[i].value - row3Array[i].value - row4Array[i].value;
            resultRow2Array[i].value = resultRow1Array[i].value - row5Array[i].value;
            resultRow3Array[i].value = resultRow2Array[i].value - row6Array[i].value - row7Array[i].value;
            resultRow4Array[i].value = +row8Array[i].value + +row9Array[i].value - row10Array[i].value;
            for (let j = 1; j < 4; j++) {
                resultRow5Array[j].value = resultRow4Array[j].value - resultRow4Array[j-1].value;
                resultRow6Array[j].value = row12Array[j].value - row12Array[j-1].value;
                resultRow7Array[j].value = +row5Array[j].value + +resultRow3Array[j].value + +resultRow4Array[j-1].value + +row12Array[j].value - +row12Array[j-1].value - +resultRow4Array[j].value - +row11Array[j].value;
            }
        }
    })
});


