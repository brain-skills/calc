let lastOperand = 0;
let operation = null;
const input = document.querySelector('input');

document.querySelector('#btn_one').addEventListener('click', function(){
    inputWindow.value += '1';
});
document.querySelector('#btn_two').addEventListener('click', function(){
    inputWindow.value += '2';
});
document.querySelector('#btn_three').addEventListener('click', function(){
    inputWindow.value += '3';
});
document.querySelector('#btn_four').addEventListener('click', function(){
    inputWindow.value += '4';
});
document.querySelector('#btn_five').addEventListener('click', function(){
    inputWindow.value += '5';
});
document.querySelector('#btn_six').addEventListener('click', function(){
    inputWindow.value += '6';
});
document.querySelector('#btn_seven').addEventListener('click', function(){
    inputWindow.value += '7';
});
document.querySelector('#btn_eight').addEventListener('click', function(){
    inputWindow.value += '8';
});
document.querySelector('#btn_nine').addEventListener('click', function(){
    inputWindow.value += '9';
});
document.querySelector('#btn_zero').addEventListener('click', function(){
    inputWindow.value += '0';
});
document.querySelector('#btn_dot').addEventListener('click', function(){
    inputWindow.value += '.';
});
document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    input.value = '';
});

// =================================================================
// Сложение
document.querySelector('#btn_plus').addEventListener('click', function(){
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
});
// Вычитание
document.querySelector('#btn_minus').addEventListener('click', function(){
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
});
// Умножение
document.querySelector('#btn_multiply').addEventListener('click', function(){
    lastOperand = parseFloat(inputWindow.value);
    operation = 'multiply';
    inputWindow.value = '';
});
// Деление
document.querySelector('#btn_divide').addEventListener('click', function(){
    lastOperand = parseFloat(inputWindow.value);
    operation = 'divide';
    inputWindow.value = '';
});
// Корень из
document.querySelector('#btn_root').addEventListener('click', function(){
    lastOperand = parseFloat(inputWindow.value);
    operation = 'root';
    inputWindow.value = '';
});
// Возведение в степень
document.querySelector('#btn_exponentiation').addEventListener('click', function(){
    lastOperand = parseFloat(inputWindow.value);
    operation = 'exp';
    inputWindow.value = '';
});
// Получение результата
document.querySelector('#btn_equals').addEventListener('click', function(){
    if(operation === 'sum'){
        const result = lastOperand + parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation === 'def'){
        const result = lastOperand - parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation === 'multiply'){
        const result = lastOperand * parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation === 'divide'){
        const result = lastOperand / parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation === 'root'){
        const result = parseFloat(Math.sqrt(inputWindow.value));
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation === 'exp'){
        const result = lastOperand ** parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
});