module.exports = {
    name: 'Mcalc',
    description: 'basic calculator',
    execute(message, args) {
        let operators = ['+', '-', '/', '*', '^', '%', '!'];
        let first = parseFloat(args[0]);
        let operator = args[1];
        let second = parseFloat(args[2]);

        if (!operators.includes(operator)) {
            message.channel.send("please use a basic operator");
            return;
        }
        if (operator === '!') {
            if(isNaN(first)) {
                message.channel.send("please use a number");
                return;
            }
            if(!isNaN(second)) {
                message.channel.send("you only need one number!");
                return;
            }
        } else {
            if ((isNaN(first) || isNaN(second))) {
                message.channel.send("please use numbers");
                return;
            }
        }

        let result;
        switch (args[1]) {
            case '+': {
                if (first < 1 && second < 1) {
                    result = ((first * 10) + (second * 10)) / 10;
                } else {
                    result = first + second;
                }
                break;
            }
            case '-': {
                result = first - second;
                break;
            }
            case '*': {
                result = first * second;
                break;
            }
            case '/': {
                result = first / second;
                break;
            }
            case '^': {
                result = first ** second;
                break;
            }
            case '%': {
                result = first % second;
                break;
            }
            case '!': {
                result = parseInt("1");
                let i = first;
                while(i > 0) {
                    result = result * i;
                    i--;
                }
                break;
            }
        }
        message.channel.send(result);
    }
}