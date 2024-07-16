// Phone Number Input Area Code.
$(".input-tel").intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
});


// let saveBtn = document.querySelector('.save-btn');
// let inputsArray = document.querySelectorAll('input');
// let textArea = document.querySelector('textarea');
// let warningAlert = document.querySelector('.alert-warning');
// let successAlert = document.querySelector('.alert-success');

// saveBtn.addEventListener('click', (e) => {
//     inputsArray.forEach(inputElement => {
//         console.log(inputsArray);
//         if(inputElement.value === '' && textArea.value === '') {
//             e.preventDefault();
//             warningAlert.classList.remove('d-none');
//             window.scrollTo(0 , 200); 
//             setTimeout(function(){
//                 warningAlert.classList.add('d-none');
//             }
//             ,5000);
//             let inputTel = document.querySelector('.input-tel');
//             console.log(inputTel.value);
//         }
//     });
// })



// function checkEmptyInputs () {
//     for (let i = 0; i < inputsArray.length; i++) {
//         if (inputsArray[i].value == '') {
//             return true;
//         }
//     }
// }
// saveBtn.addEventListener('click', (e) => {
//     if (checkEmptyInputs() === true && textArea.value === '') {
//         e.preventDefault();
//         warningAlert.classList.remove('d-none');
//         window.scrollTo(0 , 200); 
//         setTimeout(function(){
//             warningAlert.classList.add('d-none');
//         }
//         ,5000);
//         let inputTel = document.querySelector('.input-tel');
//     }
// })

let nextBtn = document.querySelector('.next-btn');
let errorAlert = document.querySelector('.error-alert');
let warningAlert = document.querySelector('.warning-alert');
let successALert = document.querySelector('.success-alert');
let inputsArray = document.querySelectorAll('.info-input');

nextBtn.addEventListener('click', () => {
    let inputsValueArray = [];
    inputsArray.forEach(inputElement => {
        inputsValueArray.push(inputElement.value);
        console.log(inputsValueArray);
        if (inputsValueArray.includes('')) {
            errorAlert.classList.remove('d-none');
            setTimeout(function(){
                errorAlert.classList.add('d-none');
            }
            , 4000);
        } else {
            setTimeout(function(){
                window.location="questions.html";
            }
            , 4000);
        }
    });
});


let saveBtn = document.querySelector('.save-btn');
let alertText = document.querySelector('.warning-alert p');
saveBtn.addEventListener('click', (e) => {
    let inputsValueArray = [];
    e.preventDefault();
    for (let i = 0; i < inputsArray.length; i++) {
        inputsValueArray.push(inputsArray[i].value);
        if (inputsValueArray[i] === '') {
            console.log(inputsValueArray);
            alertText.innerHTML = `The ${inputsArray[i].name} field is required`;
            warningAlert.classList.remove('d-none');
            setTimeout(function(){
                warningAlert.classList.add('d-none');
            }
            , 4000);
            break;
        }
    }
    if (!inputsValueArray.includes('')) {
        successALert.classList.remove('d-none');
        setTimeout(function(){
            successALert.classList.add('d-none');
        }
        , 4000);
        setTimeout(function(){
            window.location="questions.html";
        }
        , 5000);
    }
});




// Close alert.
let closeErrorAlert = document.querySelector('.close-error-alert');
let closeWarningAlert = document.querySelector('.close-warning-alert');
let closeSuccessAlert = document.querySelector('.close-success-alert');

closeErrorAlert.addEventListener('click', () => {
    errorAlert.classList.add('d-none');
});
closeWarningAlert.addEventListener('click', () => {
    warningAlert.classList.add('d-none');
});
closeSuccessAlert.addEventListener('click', () => {
    successALert.classList.add('d-none');
});
