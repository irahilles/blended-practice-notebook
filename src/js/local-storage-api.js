export function getTasksFromLS(){
    try{
        return  JSON.parse(localStorage.getItem('tasks')) ?? []}
        catch(error){
            console.log(error);
        }
}

export function saveTaskToLS(task){
const tasks = getTasksFromLS();
tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));
}