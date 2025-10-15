const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter'){
        addTask();
    };
});

function addTask(){
    const text = input.value.trim();        // remove extra spaces
    if (text === '') return;               // ignore empty input

    const li = document.createElement('li'); // create a list item
    li.textContent = text;                   // set its text

    // when clicked, toggle completed look
    li.addEventListener('click', function(e) {
        // e.target is the element that was clicked (the <li>)
        e.target.classList.toggle('completed');
    });

    list.appendChild(li); // put new task into the list
    input.value = '';     // clear input for next task
}