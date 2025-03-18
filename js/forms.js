var botaoAdicionar = document.querySelector("#adicionar-paciente");
 
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
 
    var form = document.querySelector("#form-adiciona");
 
    var paciente = obtemPacienteDoFormulario(form);
 
    var pacienteTr = montaTr(paciente);
 
    var tabela = document.querySelector("#tabela-pacientes");
 
    tabela.appendChild(pacienteTr);
 
    form.reset();
})
 
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
 
function montaTd(dado) {
    var td = document.createElement("td");
    td.textContent = dado;
 
    return td;
}
 
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
 
    pacienteTr.appendChild(montaTd(paciente.nome));
    pacienteTr.appendChild(montaTd(paciente.peso));
    pacienteTr.appendChild(montaTd(paciente.altura));
    pacienteTr.appendChild(montaTd(paciente.gordura));
    pacienteTr.appendChild(montaTd(paciente.imc));
 
    return pacienteTr;
}