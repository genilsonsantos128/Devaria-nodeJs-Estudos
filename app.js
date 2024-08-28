const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validaNumeroInformado = (numero) => {
    const parsedNumber = Number.parseFloat(numero);
    if (isNaN(parsedNumber)) {
        console.log('Número informado não é válido');
        return null; // Retorna null se o número não for válido
    }
    return parsedNumber;
}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informado inválido');
            return null;
    }
}

readLine.question('Por favor, informe um número: ', (numero1) => {
    const numeroValidado1 = validaNumeroInformado(numero1);

    if (numeroValidado1 !== null) { // Verifica se o primeiro número é válido
        readLine.question('Favor informar outro número: ', (numero2) => {
            const numeroValidado2 = validaNumeroInformado(numero2);

            if (numeroValidado2 !== null) { // Verifica se o segundo número é válido
                readLine.question('Favor informar o operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador);

                    if (operadorValidado) {
                        switch (operadorValidado) {
                            case '+':
                                console.log(`Operação selecionada: ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-':
                                console.log(`Operação selecionada: ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*':
                                console.log(`Operação selecionada: ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/':
                                if (numeroValidado2 !== 0) {
                                    console.log(`Operação selecionada: ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                } else {
                                    console.log('Divisão por zero não é permitida.');
                                }
                                break;
                            case '%':
                                console.log(`Operação selecionada: ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                        }
                    }

                    readLine.close(); // Fecha a interface após todas as operações serem concluídas
                });
            } else {
                readLine.close(); // Fecha a interface se o segundo número for inválido
            }
        });
    } else {
        readLine.close(); // Fecha a interface se o primeiro número for inválido
    }
});
