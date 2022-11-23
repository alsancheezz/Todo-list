const form = document.querySelector('form')
const save = document.querySelector('#save-btn')
const taskList = document.querySelector('.list')
const todoInput = document.querySelector('#todo')
const listItems = []

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  createTask(todoInput)
  listItems.push(todoInput.value)
  todoInput.value  = " "
})

const createTask = (todoInput) =>{
  const taskItem = document.createElement('div')
  taskItem.className = 'taskL'
  taskList.prepend(taskItem)

  const isDoneBtn = document.createElement('button')
  const todoList = document.createElement('span')
  const remove = document.createElement('button')
  const icon = document.createElement('i')
  const icon2 = document.createElement('i')

  icon.className = 'fa-regular fa-square'
  icon2.className = 'fa-solid fa-trash'

  isDoneBtn.className = 'done'
  isDoneBtn.append(icon)
  taskItem.append(isDoneBtn)

  todoList.append(`${todoInput.value}`)
  taskItem.append(todoList)

  remove.className ='remove'
  remove.append(icon2)
  taskItem.append(remove)

  taskDone()
  removeTask()
}

const taskDone = () =>{
  const currentTasks = document.querySelectorAll(".done");
  for(var i=0; i<currentTasks.length; i++){
    currentTasks[i].addEventListener('click', function(){
      this.disabled = true
      this.style.opacity = '1'
      this.style.backgroundColor = 'white'
      this.parentNode.style.backgroundColor = 'gray';
      this.nextSibling.style.textDecoration = 'line-through'
      this.firstChild.classList.remove('fa-square')
      this.firstChild.classList.add('fa-square-check')
      taskList.append(this.parentElement)
    }
    )}
}

const removeTask = () =>  {
const currentTasks = document.querySelectorAll(".remove");
for(var i=0; i<currentTasks.length; i++){
  currentTasks[i].addEventListener('click', function(){
      this.parentNode.remove();
   }
   )}
}

