// Alteração do título da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
 
// Cálculo do IMC do paciente
var pacientes = document.querySelectorAll(".paciente");
 
for (let i = 0; i < pacientes.length; i++) {
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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
 
var botaoAdicionar = document.querySelector("#adicionar-paciente");
 
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
 
    var form = document.querySelector("#form-adiciona");
 
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
 
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
 
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = (peso / Math.pow(altura, 2)).toFixed(2);
 
    var pacienteTr = document.createElement("tr");
 
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
 
    var tabela = document.querySelector("#tabela-pacientes");
 
    tabela.appendChild(pacienteTr);
 
    form.reset();
})