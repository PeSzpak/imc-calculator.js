// var tabela = document.querySelector("#tabela-pacientes");

// tabela.addEventListener("click", function (event) {
//     event.querySelector(".excluir");

//     event.target.parentNode.classList.add("fadeOut");

//     setTimeout(() => {
//         event.target.parentNode.remove();
//     }, 500);
// })
// var tabela = document.querySelector("#tabela-pacientes");

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("#tabela-pacientes")?.addEventListener("click", (event) => {
//         if (event.target.classList.contains("fa-trash-alt")) {
//             let linha = event.target.closest("tr");
//             linha?.classList.add("fadeOut");
//             setTimeout(() => linha?.remove(), 500);
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#tabela-pacientes")?.addEventListener("click", (event) => {
        let alvo = event.target, linha = alvo.closest("tr");
        if (!linha) return;

        if (alvo.classList.contains("fa-trash-alt")) return removerLinha(linha);
        if (alvo.classList.contains("fa-marker")) return editarLinha(linha);
        if (alvo.classList.contains("fa-save")) return salvarOuCancelarEdicao(linha, false);
        if (alvo.classList.contains("fa-times")) return salvarOuCancelarEdicao(linha, true);
    });
});

const removerLinha = (linha) => {
    linha.classList.add("fadeOut");
    setTimeout(() => linha.remove(), 500);
};

const editarLinha = (linha) => {
    linha.dataset.originalValues = JSON.stringify([...linha.children].slice(0, -1).map(td => td.innerText));
    linha.querySelectorAll("td:not(:last-child)").forEach(td => td.innerHTML = `<input type="text" value="${td.innerText}">`);
    atualizarBotoes(linha, true);
};

const salvarOuCancelarEdicao = (linha, cancelar) => {
    let valores = JSON.parse(linha.dataset.originalValues);
    linha.querySelectorAll("td:not(:last-child)").forEach((td, i) => td.innerHTML = cancelar ? valores[i] : td.querySelector("input").value);
    atualizarBotoes(linha, false);
};

const atualizarBotoes = (linha, editando) => {
    linha.lastElementChild.innerHTML = editando
        ? `<a href="#"><i class="fas fa-save"></i></a> <a href="#"><i class="fas fa-times" style="color: red;"></i></a>`
        : `<a href="#"><i class="fas fa-marker"></i></a> <a href="#"><i class="far fa-trash-alt"></i></a>`;
};



