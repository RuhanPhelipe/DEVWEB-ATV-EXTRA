const disciplinas = [
    {
        id: 1,
        nome: "Linguagem de Programação",
        ano: 1,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 2,
        nome: "Algoritimos",
        ano: 1,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 3,
        nome: "Arquitetura e Organização de Computadores e Sistemas Operacionais",
        ano: 1,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 4,
        nome: "Orientação à Objetos",
        ano: 2,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 5,
        nome: "Banco de Dados",
        ano: 2,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 6,
        nome: "Engenharia de Software",
        ano: 2,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 7,
        nome: "Desenvolvimento Web",
        ano: 3,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 8,
        nome: "Engenharia de Sistemas",
        ano: 3,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 9,
        nome: "Introdução à Redes",
        ano: 3,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 10,
        nome: "Tópicos Avançados de TI",
        ano: 4,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 11,
        nome: "Metodologia Científica",
        ano: 4,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
    {
        id: 12,
        nome: "Empreendedorismo",
        ano: 4,
        ementa: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis tempore quia labore ut nam. Autincidunt impedit aperiam obcaecati, exercitationem asperiores, dolor eveniet error autem vero nemo modi hic.",
    },
];

const disciplinasSelecionadas = [];

const botao = document.querySelector("#test");

botao.addEventListener("click", (event) => {
    //event.preventDefault();
    if (!disciplinasSelecionadas.length) {
        event.preventDefault();
    } else {
        sessionStorage.setItem("disciplinas", JSON.stringify(disciplinasSelecionadas));
        window.location.href = "../cadastro.html";
    }
});

const loadCards = () => {

    disciplinas.forEach((disciplina) => {

        let ano = `.ano${disciplina.ano}`;

        let divCard = document.querySelector(ano);

        let card = `
            <div class="card mb-3 p-3">
                <div class="row">
                    <div class="col-md-3">
                        <div class="row g-1">
                            <img src="" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="row">
                            <h5 class="card-title">${disciplina.nome}</h5>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="card-body">
                                <p class="card-text">${disciplina.ementa}</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <button type="button" class="btn btn-outline-secondary col-2 selecionar" isSelected="false" idDisciplina="${disciplina.id}">Selecionar</button>
            </div>
        `;
        divCard.innerHTML += card;
    });


}

window.onload = () => {
    loadCards();

    let cards = document.querySelectorAll(".card");

    let disciplinaSelecionada;

    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            event.preventDefault();

            disciplinas.forEach((disciplina) => {

                if (disciplina.id == card.lastElementChild.getAttribute("idDisciplina")) {
                    disciplinaSelecionada = {
                        id: disciplina.id,
                        nome: disciplina.nome,
                    }

                    let isSelected = card.lastElementChild.getAttribute("isSelected");

                    if (isSelected == "false") {
                        disciplinasSelecionadas.push(disciplinaSelecionada);
                        card.lastElementChild.setAttribute("isSelected", true);

                        card.lastElementChild.classList.toggle("btn-outline-secondary");
                        card.lastElementChild.classList.toggle("btn-primary");
                    } else {
                        disciplinasSelecionadas.forEach((d) => {
                            if (d.id === disciplinaSelecionada.id) {
                                let index = disciplinasSelecionadas.indexOf(d);
                                disciplinasSelecionadas.splice(index, 1);
                            }

                        });
                        card.lastElementChild.setAttribute("isSelected", false);
                        card.lastElementChild.classList.toggle("btn-outline-secondary");
                        card.lastElementChild.classList.toggle("btn-primary");
                    }
                }
            });
        });
    });
}