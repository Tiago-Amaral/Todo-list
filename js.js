função javascript para todo list com html

<script> 
//O código abaixo cria uma lista de tarefas 

//Criação de variáveis
var taskList = [];

//Função para adicionar tarefas
function addTask(task) {
    taskList.push(task);
    console.log("Tarefa adicionada com sucesso: ", task);
    document.getElementById("todoList").innerHTML = taskList;
}

//Função para remover tarefas
function removeTask(task) {
    var index = taskList.indexOf(task);
    taskList.splice(index, 1);
    console.log("Tarefa removida com sucesso: ", task);
    document.getElementById("todoList").innerHTML = taskList;
}

//HTML
<h1>Todo List</h1>
<div>
    <input type="text" id="task" placeholder="Adicione uma tarefa" />
    <button onclick="addTask()">Adicionar</button>
</div>
<ul id="tasks">
    
</ul>
