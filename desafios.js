function saludar() {
    let mensajeSaludo = 'Hola Mundo';
    return mensajeSaludo;
}
console.log(saludar());

function nombrar(nombre) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        return 'Nombre inválido';
    }
    return `Hola, ${nombre}`;
}
console.log(nombrar("Gimena"));

function valorDoble(numero) {
    let resultado = 2 * Number(numero);
    return resultado;
}
console.log(valorDoble(10));

function promedio(num1, num2, num3) {
    let suma = num1 + num2 + num3;
    return suma / 3;
}
console.log(promedio(10, 10, 10));

function valorMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(valorMayor(12, 5));

function calcularIMC(peso, altura) {
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return 'Por favor, ingresa valores numéricos válidos y positivos.';
    }
    let imc = peso / (altura * altura);
    return `${imc.toFixed(2)} kg/m^2`;
}
console.log(calcularIMC(70, 1.75));


