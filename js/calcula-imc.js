// Cálculo do IMC do paciente
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;


    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    var tdImc = paciente.querySelector(".info-imc");

    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido!"
    }

    if (!alturaEhValida) {
        tdImc.textContent = "Altura inválida!";
    }

    if (!pesoEhValido && !alturaEhValida) {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    return (peso > 0 && peso < 600) ? true : false
}

function validaAltura(altura) {
    return (altura > 0 && altura < 3) ? true : false;

}