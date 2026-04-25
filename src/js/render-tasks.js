import { refs } from "./refs"

export function addTask ({name, desc, id}){
const markup = `  <li class="task-list-item">
      <button class="task-list-item-btn" data-id="${id}">Delete</button>
      <h3>${name}</h3>
      <p>${desc}</p>
  </li>`
refs.list.insertAdjacentHTML('beforeend', markup);
}