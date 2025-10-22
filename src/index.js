
document.addEventListener("DOMContentLoaded", () => {
  // your code here
// Step 1 -> Connecting the HTML form to JS
const form = document.getElementById('create-task-form');
// Step 2 -> Adding event listener to form 
form.addEventListener('submit', (event) => {
//Step 3-> Preventing the default form behavior 
event.preventDefault();
//Step 4 -> Using event gather data into an object
const task = event.target.elements['new-task-description'].value;
//Step 5-> Call the new function called buildToDo
buildToDo(task);
});
//Step 6-> Creating the buildToDo  function
function buildToDo(task) {
  console.log('new task:', task);
//Creating a new li element
const li = document.createElement('li');
li.textContent = task;
//Append the li element to the task list
const taskList = document.getElementById('tasks');
taskList.appendChild(li);
}
});
