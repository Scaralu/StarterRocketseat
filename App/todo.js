var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input[type=text]');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todo_list')) || [];

buttonElement.onclick = addTodo;

function renderTodo() {
    listElement.innerHTML = '';
    for (todo of todos){
        var todoElement = document.createElement('li');

        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' Excluir')
        linkElement.setAttribute('href', '#')

        linkElement.appendChild(linkText);
        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }

}

renderTodo();
function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodo();
    saveToStorage();

}
function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodo();
    saveToStorage();

}
function saveToStorage(){
    localStorage.setItem('todo_list', JSON.stringify(todos));

}
