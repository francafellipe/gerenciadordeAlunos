// script.js
const buttonadd = document.getElementById("buttonadd");
const buttonremover = document.getElementById("buttonremover");
const buttonatualizar = document.getElementById("buttonatualizar");
const buttonmostrar = document.getElementById("buttonmostrar");

let turma = [];

buttonadd.addEventListener('click', function adicionarAluno() {
    const nome = prompt("Qual o nome do aluno?");
    if (nome) {
        const aluno = {
            nome: nome,
            id: turma.length,
            disciplinas: {}
        };
        turma.push(aluno);
    }
});

buttonremover.addEventListener('click', function removerAluno() {
    const idRemover = parseInt(prompt("Digite o ID do aluno que deseja remover:"));
    if (!isNaN(idRemover)) {
        turma = turma.filter(aluno => aluno.id !== idRemover);
    }
});

buttonatualizar.addEventListener('click', function atualizarNotas() {
    const disciplinaAlvo = prompt("Qual disciplina deseja atualizar?");
    const novaNota = parseFloat(prompt("Qual é a nova nota?"));
    if (disciplinaAlvo && !isNaN(novaNota)) {
        turma.forEach(aluno => {
            aluno.disciplinas[disciplinaAlvo] = novaNota;
        });
    }
});

buttonmostrar.addEventListener('click', function mostrarAlunos() {
    const containerMostrar = document.getElementById('listaalunos');
    containerMostrar.innerHTML = '';
    turma.forEach(aluno => {
        const alunoDiv = document.createElement('div');
        alunoDiv.classList.add('aluno');
        alunoDiv.innerHTML = `<p>ID: ${aluno.id}</p><p>Nome: ${aluno.nome}</p>`;
        const disciplinas = Object.entries(aluno.disciplinas).map(([disciplina, nota]) => `<p>${disciplina}: ${nota}</p>`).join('');
        alunoDiv.innerHTML += disciplinas;
        containerMostrar.appendChild(alunoDiv);
    });
});
