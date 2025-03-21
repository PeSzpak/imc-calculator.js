// var tabela = document.querySelector("#tabela-pacientes");

// tabela.addEventListener("click", function (event) {
//     event.querySelector(".excluir");

//     event.target.parentNode.classList.add("fadeOut");

//     setTimeout(() => {
//         event.target.parentNode.remove();
//     }, 500);
// })
// var tabela = document.querySelector("#tabela-pacientes");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#tabela-pacientes")?.addEventListener("click", (event) => {
        if (event.target.classList.contains("fa-trash-alt")) {
            let linha = event.target.closest("tr");
            linha?.classList.add("fadeOut");
            setTimeout(() => linha?.remove(), 500);
        }
    });
});
