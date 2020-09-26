
//working with DOM
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// funtion to list all the values inside the array. 
function renderTodos(){
    listElement.innerHTML= "";

    for (todo of todos) {
        // using document.CreateElement to generate a li inside the ul to display the values that were inputed.
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode('X');

        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);


        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

       
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }


}
renderTodos();

// using the add todo funtion to colect the input value and store it inside the array. Then call the the funtion renderTodos() so it displays all the information
function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = ''
    renderTodos();
    saveToStorage();
}


buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();

}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));

}