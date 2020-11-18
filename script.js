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

