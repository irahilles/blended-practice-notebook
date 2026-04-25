import { getTasksFromLS } from "./local-storage-api";

export function removeTask(e){
if(!e.target.classList.contains('task-list-item-btn')) return;
const id = e.target.dataset.id;
const li = e.target.closest('li');
li.remove();

 const tasks = getTasksFromLS();
const updatedTasks = tasks.filter(task => task.id !== id);
 localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
