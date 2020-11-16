// 1. Identify what is draggable
function dragStart_handler(ev) {
    //add the target elm id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    // // 2. define the drag's data 
    // ev.dataTransfer.setData('text/plain', ev.target.innerText);
    // ev.dataTransfer.setData('text/html', ev.target.outerHTML);

    // 3. define the drag effect
    // type of operation that occur when user hove over drop zone
    ev.dataTransfer.dropEffect = "copy";
    // ev.effectAllowed = "copyMove";
}
// 4.define a drop zone
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
    ev.preventDefault();
    //get the id of the target and 
    const data = ev.dataTransfer.getData("text/plain");
    //add the moved elm to the target's DOM
    ev.target.appendChild(document.getElementById(data)); 
}
// function dragend_handler(ev) {
//     console.log("dragEnd");
//     // Remove all of the drag data
//     ev.dataTransfer.clearData();
//   }
// window.addEventListener('DOMContentLoaded', () => {
//     //get elm by id 
//     const elm  = document.getElementById('draggable-1');

//     //add the ondragstart event listener
//     elm.addEventListener('dragstart', dragStart_handler);
// });

