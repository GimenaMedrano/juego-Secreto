/*let titulo=document.querySelector("h1");// objeto, define los comportamientos,
titulo.innerHTML="Juego del Numero secreto"

let parrafo=document.querySelector("p");
parrafo.innerHTML="Ingresa un numero entre 1 y 10";*/

// Función para asignar texto a un elemento del DOM

// Generar el número aleatorio global
let numeroAleatorio = 0;

let intentos=0;
let NumAleatorioDif=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para verificar el número ingresado por el usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    // Validar si el valor ingresado es un número
    if (isNaN(numeroDeUsuario)) {
        asignarTextoElemento('p', 'Por favor ingresa un número válido.');
        return;
    }
    console.log(numeroAleatorio)

    // Comparar el número ingresado con el número aleatorio
    if (numeroDeUsuario === numeroAleatorio) {
        asignarTextoElemento('p', `¡Acertaste el número! en  ${intentos} ${intentos==1? "vez" : "veces"}` );

       

document.getElementById("reiniciar").removeAttribute("disabled");//abilita el boton quitando el disabled

    } else {if (numeroDeUsuario > numeroAleatorio) {
        asignarTextoElemento('p', 'El número es menor.');
    } else {
        asignarTextoElemento('p', 'El número es mayor.');
    }
    intentos++;
    limpiar();
    

}
    
    return;
}

//funcion limpiar caja'
function limpiar (){

    //let valorCaja=
    document.querySelector("#valorUsuario").value="";//selector generico id imput
   // valorCaja.value="";
}

// Función para generar un número aleatorio
function generarNumeroAleatorio() {
    let numeroGenerado=Math.floor(Math.random() * numeroMaximo) + 1;


    //si ya sortemos todos los numeros 
    if(NumAleatorioDif==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles ')
    }
else {
    //si el numero generao esta incluido en la lista hacemos una operacion si no lo alamacenamos en la lista
    if(NumAleatorioDif.includes(numeroGenerado)){
        return generarNumeroAleatorio;
     

    }else {
        NumAleatorioDif.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

//funcion reinicias partida
function reiniciar(){
limpiar();
condicionesIniciales();
document.querySelector('#reiniciar').setAttribute('disabled', "true");


}



// Asignar textos iniciales
function condicionesIniciales(){

asignarTextoElemento('h1', 'Juego del Número Secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10')
numeroAleatorio = generarNumeroAleatorio();
intentos=1;
}
condicionesIniciales();