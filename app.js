let numeroSecreto = 0;
let intentos = 0;
let listaNumerosJugados =[];
let numeroMaximo = 20;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    console.log(intentos);
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento" : "intentos" }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista hacemos una operacion sino hacemos otra
    console.log(numeroGenerado);
    console.log(listaNumerosJugados);
    //Si ya jugamos todos los numeros
    if(listaNumerosJugados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se jugaron todos los numeros posiibles');
    } else {
        if(listaNumerosJugados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosJugados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //lipiamos la caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar nuevamente el numero aleatorio
    //reiniciar el numero de intentos
    condicionesIniciales();
    //dejar el boton deshabilitado
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();
