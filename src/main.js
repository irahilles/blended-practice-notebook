/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
const refs = {
  titleInput: document.querySelector('input[name="taskName"]'),
  descriptionInput: document.querySelector('input[name="taskDescription"]'),
  form: document.querySelector('.header-form'),
  list: document.querySelector('.tasks-list'),
  deleteButton: document.querySelectorAll('task-list-item-btn'),
}

refs.form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const titleText = refs.titleInput.value;
  const descriptionText = refs.descriptionInput.value;
if(!titleText || !descriptionText)return;
const markup = createMarkup(titleText, descriptionText);
refs.list.insertAdjacentHTML('beforeend', markup);
refs.form.reset();
})

function createMarkup(title, description){
  return `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${description}</p>
  </li>`
}

refs.list.addEventListener('click', (e)=>{
  
})