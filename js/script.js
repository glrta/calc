
let display = document.getElementById('display');

let calcDisplay = '0';
let tempCalc = '';
let tempNumber = '';
let tempResult = '';
let temResultDisplay = '';


const buttons = document.getElementById('buttons');
buttons.addEventListener('click', (clickObj) => {
    updateDisplay(clickObj.target.innerText);
})

const operators = {
    '+': '+',
    '-': '-',
    'x': '*',
    '÷': '/'
}

const updateDisplay = (textBtn) => {

    if (calcDisplay === '0') {
        calcDisplay = '';
        tempCalc = '';
        tempNumber = '';
    }
    switch (textBtn) {
        case '+':
        case '-':
        case 'x':
        case '÷':
            if ('+-x÷'.indexOf(calcDisplay[calcDisplay.length - 1]) >= 0 ){
                calcDisplay = calcDisplay.slice(0, -1);
                tempCalc = tempCalc.slice(0, -1);
            }
            calcDisplay += textBtn;
            tempCalc += operators[textBtn];
            tempNumber = '';
            break;
        case '.':
            if (tempNumber.includes('.')) {
                return;
            }
            calcDisplay += textBtn;
            tempCalc += textBtn;
            tempNumber += textBtn;
            break;
        case 'C':
            calcDisplay = calcDisplay.slice(0, -1);
            if (calcDisplay === '') {
                calcDisplay = '0';
            }
            tempCalc = tempCalc.slice(0, -1);
            tempNumber = tempNumber.slice(0, -1);
            break;
        case '=':
            tempCalc = String(eval(tempCalc));
            calcDisplay = tempCalc;
            tempNumber = '';
            break
        default: 
            calcDisplay += textBtn;
            tempCalc += textBtn;
            tempNumber += textBtn;
            break;
    }
    console.log(tempCalc, tempNumber);
    display.innerText = calcDisplay;
}



