var todoForm = document.getElementById('todoForm');
var todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', addToList);
todoForm.addEventListener('submit', removeField);
todoList.addEventListener('click', removeItem);

function addToList(e){
    e.preventDefault();

    var heading = document.getElementById('heading').value;
    var description = document.getElementById('description').value;

    heading.value = "";

    var todoBox = document.createElement('div');
    var viewHeading = document.createElement('h1');
    var viewDescription = document.createElement('p'); 
    var deleteBtn = document.createElement('button'); 


    deleteBtn.className = "remove button is-danger";
    todoBox.className = "box";
    viewHeading.className = "title";
    viewDescription.className = "subtitle";

    viewHeading.appendChild(document.createTextNode(heading));
    viewDescription.appendChild(document.createTextNode(description));
    deleteBtn.appendChild(document.createTextNode('Remove'));

    todoBox.appendChild(viewHeading);
    todoBox.appendChild(viewDescription);
    todoBox.appendChild(deleteBtn);

    todoList.appendChild(todoBox);
}

function removeField(){
    document.getElementById('heading').value = "";
    document.getElementById('description').value = "";
}

function removeItem(e){
    if(e.target.classList.contains('remove')){
            var list = e.target.parentElement;
            todoList.removeChild(list);
    }

}