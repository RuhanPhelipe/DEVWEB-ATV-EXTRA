let container = document.querySelector(".container");

let botaoVoltar = document.querySelector("#botao-voltar");

botaoVoltar.addEventListener("click", (event) => {

    sessionStorage.removeItem("aluno");

    window.location.href = "../index.html";
});

window.onload = () => {

    let nome = document.querySelector("#nome");
    let email = document.querySelector("#email");
    let telefone = document.querySelector("#telefone");
    let disciplinas = document.querySelector("#disciplinas");

    let aluno = JSON.parse(sessionStorage.getItem("aluno"));

    nome.innerText += " " + aluno.nome;
    email.innerText += " " + aluno.email;
    telefone.innerText += " " + aluno.telefone;

    for (let i = 0; i < aluno.disciplinas.length; i+=1) {
        disciplinas.innerText += " "+aluno.disciplinas[i].nome;
        if (i < aluno.disciplinas.length-1) {
            disciplinas.innerText += ",";
        } else {
            disciplinas.innerText += ".";
        }
    }
}