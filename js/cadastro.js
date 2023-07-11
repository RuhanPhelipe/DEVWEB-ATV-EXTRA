let form = document.querySelector("form");

const objObrigratorio = `
    <div class="campo-obrigatrio">
        <small> * Campo Obrigatório </small>
    </div>
`;

const checkInputs = (nome, email, telefone) => {

    let control = true;

    if (nome.value.trim() == "") {
        control = false
        nome.parentElement.innerHTML += objObrigratorio;
    }

    if (email.value.trim() == "") {
        control = false
        email.parentElement.innerHTML += objObrigratorio;
    }

    if (telefone.value.trim() == "") {
        control = false
        telefone.parentElement.innerHTML += objObrigratorio;
    }

    return control;
}

const resetInputs = () => {

    let inputs = document.querySelectorAll(".input-group");

    inputs.forEach((input) => {

        let obj = input.querySelector(".campo-obrigatrio");

        if (obj != null) {
            input.removeChild(obj);
        }
    });
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    resetInputs();

    let nome = document.querySelector("#nome");
    let email = document.querySelector("#email");
    let telefone = document.querySelector("#telefone");

    if (!checkInputs(nome, email, telefone)) {
        event.preventDefault();
    } else {

        let disciplinas = JSON.parse(sessionStorage.getItem("disciplinas"));

        let aluno = {
            nome: nome.value.trim(),
            email: email.value.trim(),
            telefone: telefone.value.trim(),
            disciplinas: disciplinas,
        }

        sessionStorage.removeItem("disciplinas");

        sessionStorage.setItem("aluno", JSON.stringify(aluno));

        window.location.href = "../relatorio.html"
    }
});