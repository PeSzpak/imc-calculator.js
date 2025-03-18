// Cálculo do IMC do paciente
var pacientes = document.querySelectorAll(".paciente");
 
for (var i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
 
    var tdImc = paciente.querySelector(".info-imc");
 
    var alturaEhValida = true;
    var pesoEhValido = true;
 
    var peso = tdPeso.textContent;
    if (peso <= 0 || peso > 600) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!"
    }
 
    var altura = tdAltura.textContent;
    if (altura <= 0 || altura > 3) {
        console.log("Altura inválida!");
        alturaEhValida = false;
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