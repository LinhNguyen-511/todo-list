// ADD NEW TASK //
// get the todo-add <input>
var newTodo = document.getElementById('todo-add');
newTodo.addEventListener("keyup", function(e) {
    // if the input has text
    // and the user press enter 
    if(newTodo.value && e.keyCode === 13) {
        e.preventDefault();
        addNewTask(newTodo.value);
        document.getElementById('todo-add').value = "";
    }
});


function addNewTask(newTodo) {
    var i = 3;
    var list = document.getElementById("todos");
    //create a new element
    var newItem = document.createElement('p');
    // change the text to what user types in
    newItem.innerText = newTodo;

    // create the div for the delete icon
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.setAttribute('onclick', 'removeTask(this);');
    var deleteIcon = document.createElement('i');
    // add the class attr of icon
    deleteIcon.className = 'far fa-trash-alt';
    deleteBtn.appendChild(deleteIcon);

    //  create the outside div
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('draggable');
    itemDiv.id = 'draggable-' + ++i;
    itemDiv.setAttribute('draggable','true');
    itemDiv.setAttribute('ondragstart','dragStart_handler(event);');
    itemDiv.setAttribute('ondragend','dragend_handler(event);');
    itemDiv.appendChild(newItem);
    itemDiv.appendChild(deleteBtn);
    // insert new todo before the first todo  
    // and after the header
	list.appendChild(itemDiv);
}

function removeTask(taskId) {
    var removedTask = taskId.parentNode;
    removedTask.parentNode.removeChild(removedTask);
}

// DRAG N DROP //
// 1. Identify what is draggable
function dragStart_handler(ev) {
    console.log("dragStart");
    //add the target elm id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    // console.log(ev.target.id);
    // // 2. define the drag's data 
    // ev.dataTransfer.setData('text/plain', ev.target.innerText);
    // ev.dataTransfer.setData('text/html', ev.target.outerHTML);

    // 3. define the drag effect
    // type of operation that occur when user hove over drop zone
    // ev.dataTransfer.dropEffect = "copy";
    // ev.effectAllowed = "copyMove";
}
// 4.define a drop zone
function dragover_handler(ev) {
    console.log("dragOver");
    ev.preventDefault();
    // ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev, el) {
    
    ev.preventDefault();
    //get the id of the target and 
    const data = ev.dataTransfer.getData("text/plain");
    console.log(data);
    console.log(ev.target);
    //add the moved elm to the target's DOM
    el.appendChild(document.getElementById(data)); 
    console.log("drop");
}
//this is optional
function dragend_handler(ev) {
    console.log("dragEnd");
    // console.log(ev.dataTransfer.dropEffect);

    // Remove all of the drag data
    // ev.dataTransfer.clearData();
}
// window.addEventListener('DOMContentLoaded', () => {
//     //get elm by id 
//     const elm  = document.getElementById('draggable-1');

//     //add the ondragstart event listener
//     elm.addEventListener('dragstart', dragStart_handler);
// });

