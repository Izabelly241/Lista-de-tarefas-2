//1. Capturar entradas e armazenar em variáveis

const novaTarefa = document.querySelector('#input_id');
const botaoAdd = document.getElementById('botao_add_id');
const formulario = document.getElementById('form_id');
const listaDeTarefas = document.getElementById('lista_id');
const botaoMarca = document.getElementById('botao_limpa_id');
const botaolimpa = document.getElementById('botao_limpa_id');

// 2. Processamentos através de eventos e funções

// função de adicionar a partir de click  da usuária, um evento
botaoAdd.addEventlistener("click", (event) => { 
    event.preventDeFult();

    const elementoLista = document.createElement("li");
    const textoTarefa = document.createElement("p");
    const iconeDeleta = document.createElement("span");

    textoTarefa.inneText = novaTarefa.value;
    iconeDeleta.inneText = " . ";

    if (textoTarefa.inneText.trim() === "") {
       alert("Você precisa digitar aluguma coisa!");

  } else {
    listaDeTarefas.appendChild(elementoLista);
    elementoLista.appendchild(textoTarefa);
    elementoLista.appendchild(iconeDeleta);
    formulario.reset();
  }
  novaTarefa.focus();

// função para deletar individualmrntr uma tarefa 
textoTarefa.addEventListener("click", () => {

    textoTarefa.classiList.toggle("checked");
    verificarMarcados(); // chama a função de uma tarefa do DESAFIO para mudar o texto
});

// função para deletar individualmente uma tarefa
iconeDeleta.addEventlistener("click", () => {

    elementoLista.remove();
});
verificaMarcados(); // chama a função de DESAFIO 2 para mudar o texto
});

// função para marcar todas as tarefas: 

botaoMarca.addEventListener("click", () => {
    let todasAsTarefas = document.querySelectorA11("p");

    if (botaoMarcar.innerText === "Marcar todos") {
        todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.add("cheacked");
        });
botaoMarca.innertext = "marcar todos";
    } else {
        todasAsTarefas.forEach((tarefa) => { 
            tarefa.classList.remove("checked");
        });
        botaoMarca.innerText = "Marcar todos";
    }
});

// função para limpar todas as tarefas: 

botaolimpa.addEventListener("click", () => { 
    listaDeTarefas.innerHTML = "";
});

// ### DESAFIO 2 ###
// função que verifica se todos estão marcados 

function verificarMarcados() {
    let todasAsTarefas = document.querySelectorA11("p");
    let verificacao = []; 

    todasAsTarefas.forEach((tarefa) => {
        // forEach pra verificar cada tarefa da array todasAsTarefas 
        if (!tarefa.classList.contains("checked")) {
            // condição que verifica se a tarefa NÃO possui a classe checked
            verificacao.push(tarefa); // insere as tarefas desmarcadas na array
        }
    });

    //verificação se alguma tarefa desmarcada 
    if (verificacao.length === 0 && todasAsTarefas) { 
        //se array tiver vazia a existir
        botaoMarca.innerText = "Desmarcar todos";
    } else {
        //se a array verificacao tiver algum
        botaoMarca.innerText = "Marcar todos";
    }
}
