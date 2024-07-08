function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function mensajenoingresado() {
    alert('Ningún mensaje fue encontrado');
}

function encriptar() {
    var texto = document.getElementById("myTextarea").value;
    if (!texto) {
        mensajenoingresado();
        return;
    }
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("textoCifrado").innerHTML = textoCifrado;
}

function desencriptar() {
    var texto = document.getElementById("myTextarea").value;
    if (!texto) {
        mensajenoingresado();
        return;
    }
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("textoCifrado").innerHTML = textoCifrado;
}

function copiar() {
    var textoCifrado = document.getElementById("textoCifrado");
    if (textoCifrado) {
        navigator.clipboard.writeText(textoCifrado.textContent).then(function() {
            alert('Texto copiado al portapapeles');
        }, function() {
            alert('Error al copiar el texto');
        });
    }
}

asignarTextoElemento('h1', 'ENCRIPTADOR');
asignarTextoElemento('p#descripcion1', 'Ingresa el texto que desees encriptar o desencriptar.');
asignarTextoElemento('p#descripcion2', 'Solo letras minúsculas y sin acentos');