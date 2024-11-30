const button = document.querySelector('.adicionar');
const input = document.getElementById('input-tarefa');
const listaCompleta = document.getElementById('lista');

let listaDeTarefas = [];

function adicionarNovaTarefa() {
    listaDeTarefas.push({
        tarefa: input.value,
        concluida: false,
    });

    input.value = '';

    mostrarTarefas();
}

function mostrarTarefas() {
    
    listaCompleta.innerHTML = '';
    listaDeTarefas.forEach((item, index) => {
        let novaLi = `
            <li class="tarefas ${item.concluida && 'done'}">
                <img onclick="concluirTarefa(${index})" alt="Feito" src="https://static.vecteezy.com/system/resources/previews/009/356/889/original/check-mark-icon-sign-symbol-design-free-png.png">
                <p>${item.tarefa}</p>
                <img onclick="deletarTarefa(${index})" alt="Descartar" src="https://flyclipart.com/thumbs/file-svg-icone-de-lixeira-1611577.png">
            </li>
            `;

            listaCompleta.innerHTML += novaLi;
    });
    
    localStorage.setItem('lista', JSON.stringify(listaDeTarefas))
}

function concluirTarefa(index) {
    listaDeTarefas[index].concluida = !listaDeTarefas[index].concluida
    mostrarTarefas()
}

function deletarTarefa(index) {
    listaDeTarefas.splice(index, 1)
    mostrarTarefas()
}

function carregarTarefas() {
    const tarefasLocalStorage = localStorage.getItem('lista')
    if (tarefasLocalStorage) {
        listaDeTarefas = JSON.parse(tarefasLocalStorage)
    }
    mostrarTarefas()    
}

carregarTarefas()
// button.addEventListener('click', adicionarNovaTarefa)