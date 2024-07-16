

let inputNumberArray = document.querySelectorAll('.input-number');
inputNumberArray.forEach(inputNumber => {
    // Disable Mouse scrolling
    inputNumber.addEventListener('mousewheel',function(e){ document.querySelector(this).blur(); });
    // Disable keyboard scrolling
    inputNumber.addEventListener('keydown',function(e) {
        var key = e.charCode || e.keyCode;
        // Disable Up and Down Arrows on Keyboard
        if(key == 38 || key == 40 ) {
            e.preventDefault();
            } else {
            return;
        }
    });

    // Prevent special characters from input number.
    let invalidChars = [
        "-",
        "+",
        "e",
      ];
      inputNumber.addEventListener("keydown", function(e) {
        if (invalidChars.includes(e.key)) {
          e.preventDefault();
        }
      });
});

// Scrolling table with mouse dragging.
const scrollElement = document.querySelector('.table');
let mouseDown = false;
let startX;
let scrollLeft;

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - scrollElement.offsetLeft;
  scrollLeft = scrollElement.scrollLeft;
};
scrollElement.addEventListener('mousedown', startDragging, false);

const stopDragging = (e) => {
  mouseDown = false;
};
scrollElement.addEventListener('mouseup', stopDragging, false);

const move = (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - scrollElement.offsetLeft;
  const scroll = x - startX;
  scrollElement.scrollLeft = scrollLeft - scroll;
}
scrollElement.addEventListener('mousemove', move, false);

scrollElement.addEventListener('mouseleave', stopDragging, false);