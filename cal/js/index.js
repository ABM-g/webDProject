function load() {
    var btns = document.querySelectorAll('#calculator span');
    var operators = ['+', '-', 'x', '÷'];
    var inputScreen = document.querySelector('#screen');
    var btnValue;
    var input;
    var c = new Audio('c.mp3');
    var e = new Audio('e.mp3');


    for(var i=0; i< btns.length; i++) {

        var decimalAdded = false;

        btns[i].addEventListener('click', function () {

            btnValue = this.innerHTML;
            input = inputScreen.innerHTML;

            switch (btnValue) {
                case 'C':
                    inputScreen.innerHTML = '';
                    decimalAdded = false;
                    c.play();
                    break;
                case '=':
					e.play();
                    var lastChar = input[input.length - 1];
                    if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                        input = input.replace(/.$/, '');
                    if(input) {
                        // If the argument is an expression, eval() evaluates the expression.
                        // If the argument is one or more JavaScript statements, eval() executes the statements.
                        inputScreen.innerHTML = eval(input);
                    }
                    decimalAdded = false;
                    break;
                case '.':
                    if(!decimalAdded) {
                        inputScreen.innerHTML += btnValue;
                        decimalAdded = true;
                    }
                    c.play();
                    break;
                case '+':
                case '-':
                case 'x':
                case '÷':
                 
                    var lastChar = input[input.length - 1];

                    
                    if(input != '' && operators.indexOf(lastChar) == -1)
                        inputScreen.innerHTML += btnValue;

                    
                    else if(input == '' && btnValue == '-')
                        inputScreen.innerHTML += btnValue;

                    
                    if(operators.indexOf(lastChar) > -1 && input.length > 1) {
                        inputScreen.innerHTML = input.replace(/.$/, btnValue);
                    }
                    decimalAdded = false;
                    c.play();
                    break;
                default:
                    inputScreen.innerHTML += btnValue;
                    decimalAdded = false;
                    c.play();
                    break;
            }
        });
    }
}