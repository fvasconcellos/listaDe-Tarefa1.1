const tarefaElement = document.getElementById("tarefa");
const buttonElement = document.getElementById("button");
const ulElement = document.querySelector('ul')


buttonElement.addEventListener('click', adicionarTarefa);

function adicionarTarefa(ev) {
    ev.preventDefault();
    if (tarefaElement.value !== "") {
        const textElement = document.createElement('span');
        textElement.innerHTML = tarefaElement.value;

        const liElement = document.createElement('li');
        liElement.appendChild(textElement);

        ulElement.appendChild(liElement);
        tarefaElement.value = "";

        const btnElement = document.createElement('btn');
        btnElement.innerHTML = 'Remover';
        liElement.appendChild(btnElement);

        btnElement.addEventListener('click', removerTarefa);

        function removerTarefa() {
            liElement.remove(liElement);
            btnElement.remove('btn');
        }
    }
}

