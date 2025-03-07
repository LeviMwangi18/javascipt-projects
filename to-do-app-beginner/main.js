const taskInput = document.getElementById('input');
const addTaskBtn = document.getElementById('addBtn');
const taskList =document.getElementById('myList');


//Add task //
addTaskBtn.addEventListener('click', function(){
    const text = taskInput.value.trim();
    if(taskText){
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
})

// fuction to create tasks
function createTaskElement (text){
    const li = document.createElement('li')
    console.log(text)
}