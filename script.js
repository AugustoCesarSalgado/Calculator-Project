const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const pressedButton = button.textContent;

        if (button.id === 'clear') {
            display.textContent = '0';
            return;
        }

        if (button.id === 'backspace') {
            if (display.textContent.length === 1 || display.textContent === 'Error!') {
                display.textContent = '0';
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === 'equal') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error!';
            }
            return;
        }

        if (display.textContent === '0' || display.textContent === 'Error!') {
            display.textContent = pressedButton;
        } else {
            display.textContent += pressedButton;
        }
    })
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};