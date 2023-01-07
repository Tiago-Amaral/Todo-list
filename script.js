
const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.getElementById("ul");
const item = document.getElementsByTagName("li");



function inputLength(){
   return input.value.length;
}

function createListElement(){
   const li = document.createElement("li");

   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value = "";

   function crossOut(){
      li.classList.toggle("done");
   }

   li.addEventListener("click", crossOut);

   const dBtn = document.createElement("button");

   dBtn.appendChild(document.createTextNode("X"));
   li.appendChild(dBtn);
   dBtn.addEventListener("click", deleteListItem);

   function deleteListItem(){
      li.classList.add("delete");
   }
   
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


function addListAfterClick(){
   if(inputLength() > 0){
      createListElement();
   }
}

function addListAfterKeypress(){
   if(inputLength() > 0 && event.which === 13){
      createListElement();
   }
}

window.onbeforeunload = function (event) {
   event.preventDefault();
   alert('Página não será atualizada!');
 };


































//function del(item){
   // const i = listaTarefa.indexOf(item);
   // listaTarefa.splice(i,1);
   // document.getElementById("todoList").innerHTML = listaTarefa;
//}


//function addTodo (){
//let item = document.getElementById("item").value;
//let list = document.getElementById("list");//


//list.innerHTML += `<span class="item-list">${item} <button class="deletar">Deletar</button></span>`;

//document.getElementById("item").value = null;
//}

