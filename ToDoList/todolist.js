// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(" .tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = function(){
    theInput.focus();
};

theAddButton.onclick = function(){

    if(theInput.value === ''){
        console.log("No value");
    }
    else{
        let noTasksMsg = document.querySelector(".no-tasks-message");
        // Check If Span With No Tasks Message Is Exist
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {
          // Remove No Tasks Message
        noTasksMsg.remove();
        }
    // Create Main Span Element
        let mainSpan = document.createElement("span");
    // Create Delete Button
        let deleteElement = document.createElement("span");
    // Create The Main Span Text
        let text = document.createTextNode(theInput.value);
    // Create The Delete Button Text
        let dalateText = document.createTextNode("Delete");

    // Add Text To Main Span
        mainSpan.appendChild(text);
    // Add Class To Main Span
        mainSpan.className = 'task-box';
    // Add Text To Delete Button
        deleteElement.appendChild(dalateText);
    // Add Class To Delete Button
        deleteElement.className='delete';
    // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);
    // Add The Task To The Container
        tasksContainer.appendChild(mainSpan);
    // Empty The Input
    theInput.value = '';
    // Focus On Field
    theInput.focus();
    // Calculate Tasks
    calculateTasks();
    }
};
document.addEventListener('click' , function(e){
    //Delete task
    if (e.target.className == 'delete'){
        e.target.parentNode.remove();
        if(tasksContainer.childElementCount == 0){
            createNoTasks();
        }
    }
    
    if (e.target.classList.contains('task-box')){
        e.target.classList.toggle("finished");
    }
    calculateTasks();

});
// Function To Create No Tasks Message
function createNoTasks() {
  // Create Message Span Element
    let msgSpan = document.createElement("span");
  // Create The Text Message
    let msgText = document.createTextNode("No Tasks Show");
  // Add Text To Message Span Element
    msgSpan.appendChild(msgText);
  // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';
  // Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);

}
function calculateTasks(){
 // Calculate All Tasks
    tasksCount.innerHTML= document.querySelectorAll('.tasks-content .task-box').length;
 // Calculate Completed Tasks
    tasksCompleted.innerHTML= document.querySelectorAll('.tasks-content .finished').length;

}