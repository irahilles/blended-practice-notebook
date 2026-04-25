import { nanoid } from "nanoid";
import { saveTaskToLS } from "./local-storage-api";
import { refs } from "./refs";
import { addTask } from "./render-tasks";  

export function initFormHandler(e) {
    e.preventDefault();

    const titleText = refs.titleInput.value.trim();
    const descriptionText = refs.descriptionInput.value.trim();

    if (!titleText || !descriptionText) return;

    const task = {
      id: nanoid(),
      name: titleText,
      desc: descriptionText,
    }

    saveTaskToLS(task);
    addTask(task);
    refs.form.reset();
}