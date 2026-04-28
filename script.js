const input_tarefa = document.getElementById("input_tarefa");
const select_prioridade = document.getElementById("select_prioridade");
const btn_adicionar = document.getElementById("btn_adicionar");
const lista_tarefas = document.getElementById("lista_tarefas");

// Função para adicionar nova tarefa
btn_adicionar.addEventListener("click", () => {
  const texto_tarefa = input_tarefa.value;
  const prioridade = select_prioridade.value;

  if (texto_tarefa === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  // Criar o elemento da lista 
  const li = document.createElement("li");
  li.className = `item_tarefa prioridade_${prioridade}`;

  // Conteúdo do item
  li.innerHTML = `
        <span>${texto_tarefa}</span>
        <div>
            <button class="btn_concluir">✔</button>
            <button class="btn_excluir">✖</button>
            <button class="btn_editar">✎</button>
        </div>
    `;

  // marcar como concluída
  li.querySelector(".btn_concluir").addEventListener("click", () => {
    li.classList.toggle("tarefa_concluida");
  });

  // excluir a tarefa
  li.querySelector(".btn_excluir").addEventListener("click", () => {
    li.remove();
  });
  li.querySelector('.btn_editar').addEventListener('click', () => {
    const novo_texto = prompt("Edite a tarefa:", texto_tarefa);
    if (novo_texto !== null && novo_texto.trim() !== "") {
      li.querySelector('span').textContent = novo_texto;
    }
  });

  // Adicionar à lista e limpar input
  lista_tarefas.appendChild(li);
  input_tarefa.value = "";
});
